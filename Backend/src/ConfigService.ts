
import * as fs from 'fs';
import * as path from 'path';

export class ConfigService {

    private static _instance: ConfigService;

    private constructor() {}

    public static getInstance() {
        
        if (!this._instance) {
            this._instance = new ConfigService();
        }

        return this._instance;
    }

    public static getConfigBykey(key: string) {

        try {

            const configFile = fs.readFileSync(path.join(__dirname, '../conf.json'), 'utf-8');

            if (configFile) {
                
                const parsedConfigFile = JSON.parse(configFile);
                return parsedConfigFile[key];

            }

        } catch (error) {
            throw new Error(error.message);
        }

    }

}