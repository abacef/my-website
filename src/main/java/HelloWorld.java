import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFileLocation;

public class HelloWorld {

    public static void main(String[] args) {
        staticFileLocation("/public");
        port(4567);
        get("/greet", (req, res) -> "Hello, World!");
    }
}
