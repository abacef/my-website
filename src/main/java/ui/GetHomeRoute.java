package ui;

import spark.*;

import java.util.HashMap;
import java.util.Map;

public class GetHomeRoute implements Route {

    private TemplateEngine te;

    private static final String emailToSendCommentsTo = "mdn4993@rit.edu";

    public GetHomeRoute(TemplateEngine te) {
        this.te = te;
    }

    @Override
    public Object handle(Request request, Response response) throws Exception {
        Map<String, Object> viewMap = new HashMap<>();

        viewMap.put("commentsEmail", emailToSendCommentsTo);
        return te.render(new ModelAndView(viewMap, "home.ftl"));
    }
}
