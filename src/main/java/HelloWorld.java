import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

public class HelloWorld {

    public static void main(String[] args) {
        staticFileLocation("/public");
        port(4567);
        get("/greet", (req, res) -> "Hello, World!");

        // serve index.html
        URL url = HelloWorld.class.getResource("build/index.html");
        get("/", "text/html", (req, res) -> new String(Files.readAllBytes(Paths.get(url.toURI()))));
    }
}
