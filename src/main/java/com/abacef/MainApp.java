package com.abacef;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;
import static spark.Spark.post;

import com.abacef.server.*;
import com.google.gson.Gson;

public final class MainApp {
    public static final short HTTP_BAD_REQUEST = 400;
    public static final short HTTP_CONFLICT = 409;
    public static final short HTTP_OK = 200;
    public static final short HTTP_CREATED = 201;

    public static final String RESPONSE_TYPE_JSON = "application/json";

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

        // returns a "greeting" every time someone querys /api/greet in order to show that the server is running
        get("/api/greet", (req, res) -> "Hello, World!");

        DomainObject domo = new DomainObject();
        PostDomainObject postDomainObject = new PostDomainObject(domo);
        GetDomainObjects getDomainObjects = new GetDomainObjects(domo, new Gson());

        post("/api/add-item", postDomainObject);
        get("/api/get-items", getDomainObjects);
    }
}
