import {Service} from '../model/service';
import express from 'express';

export class ExpressService implements Service {
    public readonly name = "Express";
    public readonly environmentVariables = [
        'PORT'
    ];

    private server;

    public init(): Promise<void> {
        const app = express();
        const port = process.env.PORT;

        app.get('/', (req, res) => {
            res.send('Hello World!')
        });

        return new Promise(resolve => {
            this.server = app.listen(port, () => {
                console.log(`Listening on port ${port}`);
                resolve();
            });
        });
    }

    public destruct(): Promise<void> {
        return new Promise(resolve => {
            this.server.close(() => resolve());
        });
    }
}
