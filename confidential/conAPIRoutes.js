module.exports = (router, app, conAPIService) => {
    router.get("/hello", app.oauth.authorise(), conAPIService.helloWorld);
    return router;
};
