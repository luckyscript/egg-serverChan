interface EggServerChanOptions {
  client: {
    sckey: string;
  };
}

interface ServerChan {
  sendMessage: (text: string, desc?: string) => any;
}

declare module 'egg' {
  interface Application {
    serverChan: Singleton<ServerChan>;
  }

  interface EggAppConfig {
    serverChan: EggServerChanOptions;
  }
}