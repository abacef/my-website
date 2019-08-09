package com.abacef;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;
import static spark.Spark.post;

import com.abacef.server.*;

public final class MainApp {
    public static final short BAD_REQUEST = 400;
    public static final short CONFLICT = 409;
    public static final short OK = 200;
    public static final short CREATED = 201;

    public static final String AN_EMPTY_STRING = "";

    /**
     * @param args if --production is the first argument from the command line, serve the webpage
     *             This program could be run for test otherwise to access the api calls
     */
    public static void main(String[] args) {
        final boolean isProduction = args.length > 0 && args[0].equals("--production");
        if (isProduction) {
            // /build is where npm minifys and makes more efficient all the files in src/main/resources
            staticFileLocation("/build");
        }

        // The same port as npm is listening to. See "proxy" of package.json
        port(4567);

        // returns a "greeting" every time someone querys /greet in order to show that the server is running
        get("/api/greet", (req, res) -> "Hello, World!");

        DomainObject domainObject = new DomainObject();

        post("/api/add-item", domainObject);
    }
}
