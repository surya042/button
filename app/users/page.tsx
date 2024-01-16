'use client';
'use client';
import { IIconProps, ITextFieldProps, TextField } from "@fluentui/react";
import * as React from "react";
import Image from "next/image";

export default CustomTextField;

export interface ICustomTextFieldProps extends ITextFieldProps {
  error?: boolean;
  prefix?: string;
  suffixIcon?: string;
}

function CustomTextField(props: ICustomTextFieldProps): React.ReactNode {
  const inputElement = (
    <TextField
      {...props}
      errorMessage={props.error ? " " : ""}
      borderless={props.readOnly}
      styles={{
        fieldGroup: {
          display: "flex",
          alignItems: "center",
          borderColor: props.error ? "#EC5555" : "#CBDEED",
          "::after": {
            borderRadius: 4,
            borderColor: props.error ? "#EC5555" : "#2C6E9E",
            borderWidth: 1,
            color: props.disabled ? "#95ACC2" : "#1A1C1E",
          },
        },
        field: {
          flex: 1,
        },
      }}
    />
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {props.prefix && (
        <div style={{ marginRight: "8px" }}>{props.prefix}</div>
      )}

      {inputElement}

      {props.suffixIcon && (
        <div>
          <Image
            alt=""
            src={props.suffixIcon}
            width={24}
            height={24}
            style={{
              filter: props.disabled
                ? 'brightness(0) saturate(100%) invert(76%) sepia(12%) saturate(541%) hue-rotate(168deg) brightness(86%) contrast(94%)'
                : 'brightness(0) saturate(100%) invert(19%) sepia(20%) saturate(7420%) hue-rotate(188deg) brightness(88%) contrast(92%)',
            }}
          />
        </div>
      )}
    </div>
  );
}



// export default CustomTextField;

// export interface ICustomTextFieldProps extends ITextFieldProps {
//   error?: boolean
//   prefixIcon?: string
//   suffixIcon?: string
// }
 
// function CustomTextField(props: ICustomTextFieldProps): React.ReactNode {

//     const prefixIcon: IIconProps = {
//       imageProps: {
//         src: props?.prefixIcon,
//         width: 24,
//         height: 24
//       },
//       styles: {
//         root: { height: '24px', width: '24px', justifyContent: 'center', alignItems: 'center', display: 'flex' },
//         imageContainer: { justifyContent: 'center', alignItems: 'center', display: 'flex' }
//       }
//     };

//     const suffixIcon: IIconProps = {
//       imageProps: {
//         src: props?.suffixIcon,
//         width: 24,
//         height: 24
//       },
//       styles: {
//         root: { height: '24px', width: '24px', justifyContent: 'center', alignItems: 'center', display: 'flex' },
//         imageContainer: { justifyContent: 'center', alignItems: 'center', display: 'flex' }
//       }
//     };

//     const onRenderPrefix = (tprops: ITextFieldProps | undefined): JSX.Element => {
//       if(props?.prefix) {
//         return <>{props?.prefix}</>;
//       }
//       if(props?.prefixIcon) {
//         return <div>
//           <Image alt="" 
//             style={{
//               filter: props?.disabled ? 'brightness(0) saturate(100%) invert(76%) sepia(12%) saturate(541%) hue-rotate(168deg) brightness(86%) contrast(94%)' 
//                       : 'brightness(0) saturate(100%) invert(19%) sepia(20%) saturate(7420%) hue-rotate(188deg) brightness(88%) contrast(92%)',
//             }}
//             src={props.prefixIcon} width={24} height={24} ></Image>
//         </div>
//       }
//       return <></>;
//     }

//     const onRenderSuffix = (tprops: ITextFieldProps | undefined): JSX.Element => {
//       if(props?.suffix) {
//         return <>{props?.suffix}</>;
//       }
//       if(props?.suffixIcon) {
//         return <div>
//           <Image alt="" 
//             style={{
//               filter: props?.disabled ? 'brightness(0) saturate(100%) invert(76%) sepia(12%) saturate(541%) hue-rotate(168deg) brightness(86%) contrast(94%)' 
//                       : 'brightness(0) saturate(100%) invert(19%) sepia(20%) saturate(7420%) hue-rotate(188deg) brightness(88%) contrast(92%)',
//             }}
//             src={props.suffixIcon} width={24} height={24} ></Image>
//         </div>
//       }
//       return <></>;
//     }
    
//     return <TextField {...props} 
//       errorMessage={props.error? " ": ""}
//       borderless={props.readOnly}
//       onRenderPrefix={onRenderPrefix}
//       onRenderSuffix={onRenderSuffix}
//       // prefix={
//       //   <span className={prefixClassName}>
//       //     Prefix
//       //   </span>
//       // }
//       styles={{
//         fieldGroup: {
//           borderRadius: 4,
//           height: 40,
//           minWidth: props.readOnly ? 'inherit' : 250,
//           borderColor: props.error? '#EC5555' : '#CBDEED',
//           // display: 'flex',
//           // justifyContent: 'center',
//           // alignItems: 'center',
//           '::after': {
//             borderRadius: 4,
//             borderColor: props.error? '#EC5555' : '#2C6E9E',
//             borderWidth: 1,
//             color: props.disabled? '#95ACC2' : '#1A1C1E',
//           },
//         },
//         field: {
//           // width: props.readOnly ? (props.value?.length * 8 + 5) : '100%',
//           height: '100%',
//           color: props.disabled? '#95ACC2' : '#1A1C1E',
//           fontFamily: 'Lato',
//           fontSize: 16,
//           fontWeight: 400,
//           paddingLeft: props.readOnly ? (props.prefix || props.prefixIcon ? '8px' : '0px') : '16px',
//           paddingRight: props.readOnly ? (props.suffix || props.suffixIcon ? '8px' : '0px') : '16px',
//           ':focus': {
//             backgroundColor: props.readOnly? 'transparent' : '#E3F2FC',
//           },
//         },
//         prefix: {
//           borderTopLeftRadius: 4,
//           borderBottomLeftRadius: 4,
//           color: props.disabled? '#95ACC2' : '#0A4977',
//           fontSize: 16,
//           fontWeight: 400,
//           // width: (props.prefix || props.prefixIcon) ? 'inherit' : '0px',
//           padding: props.readOnly ? '0px' : (props.prefix || props.prefixIcon) ? '0px 10px' : '0px',
//           backgroundColor: props.readOnly? 'transparent' : props.disabled? '#E7F0F6' : '#F5FBFF',
//           borderRight: (props.prefix || props.prefixIcon) ? (props.readOnly? '0px' : '1px solid') : '0px',
//           borderColor: props.error? '#EC5555' : '#CBDEED',
//           ':focus': {
//             borderRight: props.readOnly? '0px' : '1px solid',
//             borderColor: props.error? '#EC5555' : '#2C6E9E',
//           }
//         },
//         suffix: {
//           borderTopRightRadius: 4,
//           borderBottomRightRadius: 4,
//           color: props.disabled? '#95ACC2' : '#0A4977',
//           fontSize: 16,
//           fontWeight: 400,
//           // padding: (props.suffix || props.suffixIcon) ? '0px 10px' : '0px',
//           padding: props.readOnly ? '0px' : (props.suffix || props.suffixIcon) ? '0px 10px' : '0px',
//           backgroundColor: props.readOnly? 'transparent' : props.disabled? '#E7F0F6' : '#F5FBFF',
//           borderLeft: (props.suffix || props.suffixIcon) ? (props.readOnly? '0px' : '1px solid') : '0px',
//           borderColor: props.error? '#EC5555' : '#CBDEED',
//         },
//         icon: {
//           filter: props.disabled ? 'brightness(0) saturate(100%) invert(76%) sepia(12%) saturate(541%) hue-rotate(168deg) brightness(86%) contrast(94%);'
//                     : 'brightness(0) saturate(100%) invert(19%) sepia(20%) saturate(7420%) hue-rotate(188deg) brightness(88%) contrast(92%)',
//           bottom: 0,
//           right: 0,
//           width: '40px !important',
//           height: '40px',
//         },
//         revealButton: {
//           width: '40px',
//           height: '100%',
//           borderTopRightRadius: '4px',
//           borderBottomRightRadius: '4px'
//         },
//         revealIcon: {
//           filter: props.disabled ? 'brightness(0) saturate(100%) invert(76%) sepia(12%) saturate(541%) hue-rotate(168deg) brightness(86%) contrast(94%);'
//                     : 'brightness(0) saturate(100%) invert(19%) sepia(20%) saturate(7420%) hue-rotate(188deg) brightness(88%) contrast(92%)',
//           // bottom: 0,
//           // right: 0,
//           width: '40px !important',
//           height: '100%',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         },
//       }}
//     ></TextField>
//   }
//   export default CustomTextField;

