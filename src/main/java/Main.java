import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

public class Main {

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
        get("/greet", (req, res) -> "Hello, World!");

    }
}
