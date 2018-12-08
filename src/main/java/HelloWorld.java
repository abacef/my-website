package com.abacef;

import static spark.Spark.get;
import static spark.SparkBase.port;
import static spark.SparkBase.staticFileLocation;

public class HelloWorld {

    public static void main(String[] args) {
        staticFileLocation("/public");
        port(4567);
        get("/greet", (req, res) -> "Hello, World!");
    }
}
