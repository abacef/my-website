package com.abacef;

import com.abacef.configuration.Configuration;
import com.abacef.server.*;
import com.google.common.io.ByteStreams;
import com.google.gson.Gson;
import org.apache.commons.cli.*;

import java.io.InputStream;

import static spark.Spark.*;

public final class MainApp {
    public static final short HTTP_BAD_REQUEST = 400;
    public static final short HTTP_CONFLICT = 409;
    public static final short HTTP_OK = 200;
    public static final short HTTP_CREATED = 201;

    public static final String RESPONSE_TYPE_JSON = "application/json";

    public static final String AN_EMPTY_STRING = "";

    private final static String PATH_TO_INDEX_HTML = "/build/index.html";

    private static String INDEX_DOT_HTML_AS_STRING;

    public static void main(String[] args) {
        Configuration config = new Configuration(args);
        if (!config.parseSucceeded()) {
            System.exit(1);
        }

        // The same port as npm is listening to. See "proxy" of package.json
        int port = config.getPort() != null ? config.getPort() : 4567;
        System.out.println("listening on " + port);
        port(port);
        System.out.println("config.onlyAPI: " + config.onlyApi());

        if (!config.onlyApi()) {
            // /build is where npm minifys and makes more efficient all the files in src/main/resources
            staticFileLocation("/build");

            try {
                InputStream in = MainApp.class.getResourceAsStream(PATH_TO_INDEX_HTML);
                INDEX_DOT_HTML_AS_STRING = new String(ByteStreams.toByteArray(in));
            } catch (Exception e) {
                e.printStackTrace();
                return;
            }

            // these routes need to be directed back to the SPA to handle, not this server
            get("/bugs", "text/html", (req, res) -> INDEX_DOT_HTML_AS_STRING);
            get("/stuff", "text/html", (req, res) -> INDEX_DOT_HTML_AS_STRING);
            get("/my-car", "text/html", (req, res) -> INDEX_DOT_HTML_AS_STRING);
        }

        // returns a "greeting" every time someone querys /api/greet in order to show that the server is running
        get("/api/greet", (req, res) -> "Hello, World!");

        DomainObject domo = new DomainObject();
        PostDomainObject postDomainObject = new PostDomainObject(domo);
        GetDomainObjects getDomainObjects = new GetDomainObjects(domo, new Gson());

        post("/api/add-item", postDomainObject);
        get("/api/get-items", getDomainObjects);
        exception(Exception.class, (exception, request, response) -> {
            exception.printStackTrace();
        });

    }
}
