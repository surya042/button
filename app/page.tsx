import Link from 'next/link';
import CustomTextField from './users/page'; 
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href="/users">Users</Link>
      <div className="grid">
        {/* First Row */}
        <div className="row">
          <CustomTextField defaultValue="some text" />
          <CustomTextField readOnly value="read only" />
          <CustomTextField error value="some error" />
          <CustomTextField disabled value="disabled" />
        </div>
        <div className="row">
          <CustomTextField prefix="https://" defaultValue="some text" />
          <CustomTextField prefix="https://" readOnly value="read only" />
          <CustomTextField prefix="https://" error value="some error" />
          <CustomTextField prefix="https://" disabled value="disabled" />
        </div>
        <div className="row">
          <CustomTextField suffix=".com" defaultValue="some text" />
          <CustomTextField suffix=".com" readOnly value="read only" />
          <CustomTextField suffix=".com" error value="some error" />
          <CustomTextField suffix=".com" disabled value="disabled" />
        </div>
        {/* Fourth Row */}
        <div className="row">
          <CustomTextField prefixIcon="/store.svg" defaultValue="some text" />
          <CustomTextField prefixIcon="/store.svg" readOnly value="read only" />
          <CustomTextField prefixIcon="/store.svg" error value="some error" />
          <CustomTextField prefixIcon="/store.svg" disabled value="disabled" />
        </div>
        {/* Fifth Row */}
        <div className="row">
          <CustomTextField suffixIcon="/store.svg" defaultValue="some text" />
          <CustomTextField suffixIcon="/store.svg" readOnly value="read only" />
          <CustomTextField suffixIcon="/store.svg" error value="some error" />
          <CustomTextField suffixIcon="/store.svg" disabled value="disabled" />
        </div>
      </div>
    </main>
  );
}


// import Link from 'next/link'
// import CustomTextField from './users/page'
// import './globals.css'

// export default function Home() {
//   return (
//     <main>
//       <h1>Hello, World!</h1>
//       <Link href="/users">Users</Link>
//       <div className="grid">
//         {/* First Row */}
//         <div className="row">
//           <CustomTextField defaultValue="some text" />
//           <CustomTextField readOnly value="read only" />
//           <CustomTextField error value="some error" />
//           <CustomTextField disabled value="disabled" />
//         </div>
//         {/* Second Row */}
//         <div className="row">
//           <CustomTextField prefix="https://" defaultValue="some text" />
//           <CustomTextField prefix="https://" readOnly value="read only" />
//           <CustomTextField prefix="https://" error value="some error" />
//           <CustomTextField prefix="https://" disabled value="disabled" />
//         </div>
//         {/* Third Row */}
//         <div className="row">
//           <CustomTextField suffix=".com" defaultValue="some text" />
//           <CustomTextField suffix=".com" readOnly value="read only" />
//           <CustomTextField suffix=".com" error value="some error" />
//           <CustomTextField suffix=".com" disabled value="disabled" />
//         </div>
//         {/* Fourth Row */}
//         <div className="row">
//           <CustomTextField prefixIcon="/store.svg" defaultValue="some text" />
//           <CustomTextField prefixIcon="/store.svg" readOnly value="read only" />
//           <CustomTextField prefixIcon="/store.svg" error value="some error" />
//           <CustomTextField prefixIcon="/store.svg" disabled value="disabled" />
//         </div>
//         {/* Fifth Row */}
//         <div className="row">
//           <CustomTextField suffixIcon="/store.svg" defaultValue="some text" />
//           <CustomTextField suffixIcon="/store.svg" readOnly value="read only" />
//           <CustomTextField suffixIcon="/store.svg" error value="some error" />
//           <CustomTextField suffixIcon="/store.svg" disabled value="disabled" />
//         </div>
//       </div>
//     </main>
//   )
// }
