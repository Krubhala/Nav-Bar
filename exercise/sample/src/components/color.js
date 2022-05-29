import React from 'react';


class ChangeName extends React.Component {
   constructor(props) {
      super(props);
      this.state = { color: 'red' };
   }
   componentDidMount() {
      // Changing the state after 3 sec
      setTimeout(() => {
         this.setState({ color: 'wheat' });
      }, 2000);
   }
   render() {
      console.log('ChangeName component is called');
      return (
         <div>
            <h1>Simply Easy Learning</h1>
            {this.state.color}
         </div>
      );
   }
}
export default ChangeName;