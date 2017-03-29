# Lab 8 - Communication - Part 1

## Communication from the parent to the child component with @Input

This sample communicates from the parent to the child with @Input metadata.

1. Create ParentAComponent and ChildAComponent

2. In the child component, create an input property:

```TypeScript
  @Input() message : string;
``` 

Import the necessary type.

Show the received message from the parent in the HTML template using one-way binding:

```HTML
<div>from the parent: {{message}}</div>
```

3. In the parent component, define an input element that uses two-way binding to allow defining a message that will be sent to the input child:

```HTML
<input type="text" [(ngModel)]="messagefromparent">
```

4. With the implementation of the parent component, *messagefromparent* is just a simple property:

```TypeScript
public messagefromparent : string;
```

5. In the HTML template of the parent, the message property of the child is bound to the messagefromparent property from the parent:

```HTML
<child-with-input [message] = "messagefromparent" ></child-with-input>
```

6. Test the communication

7. Change the implementation of the child component to use a full property. In the setter, log to the console.

8. After testing of the communication, change the implementation back to a simple property. Implement the OnChanges interface to write all property changes to the console. In Visual Studio Code, make use of the smart tag to implement the interface.

```TypeScript
  ngOnChanges(changes: SimpleChanges): void {
      console.log(JSON.stringify(changes));
  }
```

## Communication from the child to the parent component with @Output

This sample communicates from the child to the parent with the @Output metadata.

1. Create ParentBComponent and ChildBComponent

2. In the child component, create an output property of type EventEmitter<string>:

```TypeScript
  @Output() onmessage = new EventEmitter<string>();
```

3. Define a message property and a sendmessage method that will be invoked from the child template. With the implementation of the sendmessage method, invoke the EventEmitter to send a message to the parent component.

```TypeScript
  private message : string;

  public sendmessage(m : string) : void {
    this.onmessage.emit(m);
    console.log(`sending message ${m} from child to parent`);
  }
```

4. The HTML template of the child makes use of two-way binding to assign a message, and event-binding to invoke the sendmessage method:

```HTML
<input type="text" [(ngModel)]="message">
<br />
<button (click)="sendmessage(message)">Send</button>
```

5. With the implementation of the parent component, define a string property and a method that will be used from the parent HTML template:

```TypeScript
  public messagefromparent : string;

  public messagefromchild : string;
  public onmessagereceived(m : string) : void {
    this.messagefromchild = m;
  }
```

6. In the HTML template of the parent, create the child component, and use the event binding syntax to bind to the event emitter. Use binding to invoke the method onmessagereceived, and to access the messagefromchild property: 

```HTML
<div>Parent: {{messagefromchild}}</div>

<app-child-output (onmessage)=onmessagereceived($event)></app-child-output>
```

7. Test and run the application

## Directly invoke methods of the child using @ViewChild

1. Define the HTML template of the child and show the bound seconds:

```HTML
<h1>{{seconds}}</h1>
```

2. In the implementation of the child, create start() and stop() methods to start and stop a timer, and write timer messages. Use the OnInit and OnDestroy events.

```TypeScript
export class TimerComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy(): void {
      this.clearTimer();
  }

  public start() : void {
    this.countDown();
  }

  public stop() : void {
    this.clearTimer();
    this.message = `stop at ${this.seconds}`;
  }

  public intervalId = 0;
  public message = '';
  public seconds = 11;

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Start!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
```

3. In the implementation of the parent component, implement start() and stop() methods, where the child component is invoked. The child component is accessible from TypeScript using @ViewChild metadata:

```TypeScript
export class ParentComponent implements OnInit {
  constructor() { }

  @ViewChild(TimerComponent)
  private childComponent : TimerComponent;

  ngOnInit() {
  }

  public messagefromparent : string;

  public start() : void {
    this.childComponent.start();
    console.log("starting timer from parent");
  }

  public stop() : void {
    this.childComponent.stop();
  }
}
```

4. With the HTML template of the parent, instantiate the child, and invoke methods from parent which in turn invoke methods from the child:

```HTML
<button (click)="start()">Start Communication with output component</button>
<button (click)="stop()">Stop communication</button>

<timer-component></timer-component>
```

5. Invoke the timer component directly from the HTML of the parent to show timer messages in the parent:

```HTML
<timer-component #timer></timer-component>

<div>in the parent: message from child {{timer.message}}</div>
```

6. Run the application
