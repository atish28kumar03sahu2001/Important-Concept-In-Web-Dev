import './App.css';
import { Steeper } from './components/Stepper';
const CheckOut_Steps = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Your Contact Details</div>
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide Your Shipping Details</div>
  },
  {
    name: "Payment Info",
    Component: () => <div>Provide Your Payment Details</div>
  },
  {
    name: "Delivered Info",
    Component: () => <div>Provide Your Delivered Details</div>
  },
]
export const App = () => {
  return (
    <>
     <h2>CheckOut</h2>
     <Steeper steps={CheckOut_Steps} />
    </>
  );
}