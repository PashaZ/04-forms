// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar/AppBar';
// import SignupForm from './components/SignupForm/SignupForm';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Counter from './components/Counter/Counter';
import Clock from './components/Clock/Clock';
// import PokemonView from './views/PokemonView';
// -----------      -----------     -------------
// import OldSignupForm from './components/SignupForm/OldSignupForm'
// import OldColorPicker from "./components/ColorPicker/OldColorPicker";
// import OldCounter from "./components/Counter/OldCounter";

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      {/* <AppBar /> 

       <Switch>
        <Route path="/signup"> 
      <SignupForm />  */}
      {/* <OldSignupForm /> */}
      {/* </Route> */}

      {/* <Route path="/colorpicker"> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <OldColorPicker options={colorPickerOptions} /> */}
      {/* </Route>

        <Route path="/counter">
          <Counter /> */}
      {/* <OldCounter />

      </Route>

        <Route path="/clock"> */}
      <Clock />
      {/* </Route>

        <Route path="/pokemon">
          <PokemonView />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}
