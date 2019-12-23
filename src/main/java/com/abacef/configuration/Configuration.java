package com.abacef.configuration;

import org.apache.commons.cli.*;

/**
 * Parse the command line options. To access the options, useful functions are written as wrappers to the cli
 */
public class Configuration {
    private boolean success;

    private CommandLine parsed;

    public Configuration(String[] args) {
        Options options = new Options();

        Option onlyApi = new Option("a", "only-api", false, "the GUI will not be served, but the API will work");

        Option port = new Option("p", "port", true, "the port to listen on");

        options.addOption(onlyApi);
        options.addOption(port);

        CommandLineParser clp = new DefaultParser();
        try {
            parsed = clp.parse(options, args);
            if (getPort() == null) { // just calling this to see if anything errors out
                throw new ParseException(null);
            }
            success = true;
        } catch (ParseException pe) {
            success = false;
            if (pe.getMessage() != null) {
                System.err.println(pe.getMessage());
            }
            HelpFormatter usageObj = new HelpFormatter();
            usageObj.printHelp("java my-website*.jar", options);
        } catch (Exception e) {
            success = false;
        }
    }

    public Integer getPort() {
        String s = parsed.getOptionValue('p');
        Integer ret = null;
        try {
            int pos = Integer.parseInt(s);
            if (pos < 1 || pos > 65535) {
                throw new NumberFormatException();
            }
            ret = pos;
        } catch (NumberFormatException nfe) {
            System.err.println("Your Port option not a valid port number");
        }
        return ret;
    }

    public boolean onlyApi() {
        return parsed.hasOption('a');
    }

    public boolean parseSucceeded() {
        return success;
    }
}
