import express, { Request, Response, NextFunction, Express } from 'express';
const app: Express = express();
const port: number = 3000;


let helloWord = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({ hello: "world" })
}

app.get("/", helloWord)

app.listen(port, () => {
    console.log(`API Works on port: ${port}.`);
});