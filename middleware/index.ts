import express from 'express';


const applyGlobalMiddleware = (app: express.Express) => {
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
};

export default applyGlobalMiddleware;
