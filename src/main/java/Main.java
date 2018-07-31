import com.google.gson.Gson;
import spark.TemplateEngine;
import spark.template.freemarker.FreeMarkerEngine;
import ui.WebServer;

/**
 * The entry point to the application
 */
public class Main {
    public static void main(String[] args) {
        // The engine processing freemarker templates throughout the whole
        // program
        final TemplateEngine templateEngine = new FreeMarkerEngine();

        final Gson gson = new Gson();

        final WebServer webServer = new WebServer(templateEngine, gson);

        webServer.initialize();
    }
}
