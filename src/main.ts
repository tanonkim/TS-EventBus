import { EventBus } from "./event-bus/event-bus";

enum Event {
    HelloWorld = 'hello-world'
}

const registry = EventBus.getInstance().register(Event.HelloWorld, (name:string) => {
    if (name) {
        console.log('Hello ' + name);
    } else {
        console.log('Good Morning');
    }
});

EventBus.getInstance().dispatch<string>(Event.HelloWorld, 'Tanon');
EventBus.getInstance().dispatch<string>(Event.HelloWorld);
registry.unregister();
EventBus.getInstance().dispatch<string>(Event.HelloWorld);