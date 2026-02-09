1. What is JSX, and why is it used? <br>
    Full form of JSX is Javascript XML. JSX is used to write HTML like code inside the Javascript file in React. It helps to write both JS logics and markup in same component. 

2. What is the difference between State and Props? <br>
    State is used to store data dynamically of a component that can change with time. 
    Props are used to pass the data to a component. It can be used in the child component but can not be modified like the state. 

3. What is the useState hook, and how does it work? <br>
    useState is a hook which helps to store data and change the data using a function.
    Usually useState contains a variable and a function. The variable stores the data and the function changes the data which re-renders in the React's virtual DOM. 

4. How can you share state between components in React? <br>
    To share a state between components, the state is placed in a common component or parent component. Then all the child components can share the state using prop drilling. This method is called Lifting State Up. 

5. How is event handling done in React? <br>
    Event Handling in React is almost same as usual JS but it uses Components, JSX syntax like, onClick, onChange and Synthetic Event. 