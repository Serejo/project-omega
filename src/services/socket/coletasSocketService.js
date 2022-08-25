import env from "../../../env";
import socketIo from 'socket.io-client';

class ColetasSocketService
{
    #coletaId = 0;
    #socket = {};
    #baseUrl = '';

    constructor() {
        this.#baseUrl = env.webSocketBaseUrl;
    }

    connect({coletaId}) {
        console.log(`Trying to connect with websocket with coletaId = ${coletaId}.`)
        this.#coletaId  = coletaId;
        this.#socket = this.#newSocketIoInstance();
        this.#socket.connect();
        this.#onSocketConnectionError();
        this.#onSocketConnection();
        return this;
    }

    #newSocketIoInstance() {
        const options = {transports: ['websocket']};
        const url = this.#url();
        console.log({url});
        return socketIo(url, options);
    }

    #onSocketConnection() {
        this.#socket.on("connect", () => console.log(`WebSocket connected`));
    }

    #onSocketConnectionError() {
        this.#socket.on("connect_error", (err) => {
            console.group('WebSocket connection error: ' + err.message)
            console.error({err})
            console.groupEnd();
        });
    }

    #url() {
        return env.webSocketBaseUrl + "?coleta-id=" + this.#coletaId;
    }

    isConnected() {
        return (this.#socket || {}).connected || false;
    }


    onColetaUpdate(callback) {
        this.#socket.on('coleta/update', (message) => {
            console.log(`Message from socket with coletaId=${this.#coletaId} received: ${message}`)
            callback(message)
        });
        return this;
    }

    disconnect() {
        console.log(`Socket with coletaId=${this.#coletaId} disconnected.`)
        this.#socket.disconnect();
    }
}

const coletasSocketService = new ColetasSocketService();

export {coletasSocketService};
