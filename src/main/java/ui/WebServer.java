package ui;

import static spark.Spark.*;

import com.google.gson.Gson;
import spark.TemplateEngine;

public class WebServer {

    private TemplateEngine templateEngine;

    private Gson gson;

    public static final String HOME_URL = "/";
    public static final String SIGNIN_URL = "/signin";
    public static final String GAME_URL = "/game";
    public static final String SIGNOUT_URL = "/signout";
    public static final String RESIGN_URL = "/resignGame";
    public static final String VALIDATE_MOVE_URL = "/validateMove";
    public static final String CHECK_TURN_URL = "/checkTurn";
    public static final String SUBMIT_TURN_URL = "/submitTurn";
    public static final String BACKUP_MOVE = "/backupMove";

    public WebServer(TemplateEngine templateEngine, Gson gson) {
        this.templateEngine = templateEngine;
        this.gson = gson;
    }

    public void initialize() {
        // maps

        /*
        get(HOME_URL, new GetHomeRoute(templateEngine, playerLobby));
        // Sign in page
        get(SIGNIN_URL, new GetSignInRoute(templateEngine));
        get(GAME_URL, new GetGameRoute(templateEngine, playerLobby));
        post(SIGNIN_URL, new PostSignInRoute(templateEngine, playerLobby));
        post(GAME_URL, new PostGameRoute(templateEngine, playerLobby));

        // Determine page after sign in
        post(SIGNIN_URL, new PostSignInRoute(templateEngine, playerLobby));
        // Return to home page
        get(SIGNOUT_URL, new GetSignOutRoute(templateEngine, playerLobby));

        // Player resigns from a game
        post(RESIGN_URL, new PostResignGameRoute(playerLobby, gson));

        // Validate a move
        post(VALIDATE_MOVE_URL, new PostValidateMoveRoute(playerLobby, gson));
        // Check whose turn it is
        post(CHECK_TURN_URL, new PostCheckTurnRoute(playerLobby, gson));
        // Back up the last move
        post(BACKUP_MOVE, new PostBackUpMoveRoute(playerLobby, gson));
        // Submit a turn
        post(SUBMIT_TURN_URL, new PostSubmitTurnRoute(playerLobby, gson));
        */
    }
}
