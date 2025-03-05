"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[9447],{1199:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-tokens-7GAcVrY-72f496d8c3b2bda2bc021e3f9e24e900.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}},46271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"worlds/udon/data-containers/data-tokens","title":"Data Tokens","description":"Data Tokens store data. Each token stores one and only one variable. Data Tokens are used in Data Dictionaries and Data Lists.","source":"@site/docs/worlds/udon/data-containers/data-tokens.md","sourceDirName":"worlds/udon/data-containers","slug":"/worlds/udon/data-containers/data-tokens","permalink":"/creator-docs_ja/worlds/udon/data-containers/data-tokens","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1722644343000,"frontMatter":{"title":"Data Tokens","slug":"data-tokens","hidden":false,"createdAt":"2023-04-24T23:48:30.309Z","updatedAt":"2023-04-25T00:01:54.599Z"},"sidebar":"tutorialSidebar","previous":{"title":"Data Lists","permalink":"/creator-docs_ja/worlds/udon/data-containers/data-lists"},"next":{"title":"VRCJSON","permalink":"/creator-docs_ja/worlds/udon/data-containers/vrcjson"}}');var r=n(74848),i=n(28453);const s={title:"Data Tokens",slug:"data-tokens",hidden:!1,createdAt:"2023-04-24T23:48:30.309Z",updatedAt:"2023-04-25T00:01:54.599Z"},o="Data Tokens",h={},l=[{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"Creating Data Tokens",id:"creating-data-tokens",level:2},{value:"UdonSharp",id:"udonsharp",level:3},{value:"Udon Graph",id:"udon-graph",level:3},{value:"Getting values out of a Data Token",id:"getting-values-out-of-a-data-token",level:2},{value:"Errors",id:"errors",level:2},{value:"FAQ",id:"faq",level:2},{value:"What is the difference between String and ToString?",id:"what-is-the-difference-between-string-and-tostring",level:3},{value:"Why not have a TryGetValue that gives the value directly, skipping tokens?",id:"why-not-have-a-trygetvalue-that-gives-the-value-directly-skipping-tokens",level:3}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"data-tokens",children:"Data Tokens"})}),"\n",(0,r.jsxs)(t.p,{children:["Data Tokens store data. Each token stores one and only one variable. Data Tokens are used in ",(0,r.jsx)(t.a,{href:"/worlds/udon/data-containers/data-dictionaries",children:"Data Dictionaries"})," and ",(0,r.jsx)(t.a,{href:"/worlds/udon/data-containers/data-lists",children:"Data Lists"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Data Tokens can contain the following Token Types:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Null"}),"\n",(0,r.jsx)(t.li,{children:"Boolean"}),"\n",(0,r.jsx)(t.li,{children:"SByte"}),"\n",(0,r.jsx)(t.li,{children:"Byte"}),"\n",(0,r.jsx)(t.li,{children:"Short"}),"\n",(0,r.jsx)(t.li,{children:"UShort"}),"\n",(0,r.jsx)(t.li,{children:"Int"}),"\n",(0,r.jsx)(t.li,{children:"UInt"}),"\n",(0,r.jsx)(t.li,{children:"Long"}),"\n",(0,r.jsx)(t.li,{children:"ULong"}),"\n",(0,r.jsx)(t.li,{children:"Float"}),"\n",(0,r.jsx)(t.li,{children:"Double"}),"\n",(0,r.jsx)(t.li,{children:"String"}),"\n",(0,r.jsx)(t.li,{children:"Data Lists (Stores other DataTokens)"}),"\n",(0,r.jsx)(t.li,{children:"Data Dictionaries (Stores other DataTokens)"}),"\n",(0,r.jsxs)(t.li,{children:["Object Reference (Able to store ",(0,r.jsx)(t.strong,{children:"anything"})," through boxing, but cannot be serialized)"]}),"\n",(0,r.jsx)(t.li,{children:"Data Errors (An enum that indicates what went wrong)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Result"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TokenType"}),(0,r.jsx)(t.td,{children:"Returns the current TokenType of variable that this DataToken contains"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IsNumber"}),(0,r.jsx)(t.td,{children:"Returns true if the DataToken contains any numeric type. Otherwise, returns false."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IsNull"}),(0,r.jsx)(t.td,{children:"Returns true if the value contained within this DataToken is null in any form. Numbers and bools are never null, TokenType.Null is always null, strings check for null but not emptiness, and references use Utilities.IsValid internally to handle players that have left and objects that have been destroyed."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Returns a bool if the DataToken contains a bool. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Number"}),(0,r.jsx)(t.td,{children:"Returns a double if the DataToken contains any numeric type. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"SByte"}),(0,r.jsx)(t.td,{children:"Returns an 8-bit signed sbyte if the DataToken contains an sbyte. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Byte"}),(0,r.jsx)(t.td,{children:"Returns an 8-bit unsigned byte if the DataToken contains a byte. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Short"}),(0,r.jsx)(t.td,{children:"Returns a 16-bit signed short if the DataToken contains a short, sbyte, or byte. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UShort"}),(0,r.jsx)(t.td,{children:"Returns a 16-bit unsigned ushort if the DataToken contains a ushort or byte. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Returns a 32-bit signed int if the DataToken contains an int, sbyte, byte, short, or ushort. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UInt"}),(0,r.jsx)(t.td,{children:"Returns a 32-bit unsigned uint if the DataToken contains a uint, byte, or ushort. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Long"}),(0,r.jsx)(t.td,{children:"Returns a 64-bit signed long if the DataToken contains a long, sbyte, byte, short, ushort, or uint. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ULong"}),(0,r.jsx)(t.td,{children:"Returns a 64-bit unsigned ulong if the DataToken contains a ulong, byte, ushort, or uint. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Float"}),(0,r.jsx)(t.td,{children:"Returns a 32-bit float if the DataToken contains a float, sbyte, byte, short, ushort, int, uint, long, or ulong. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Double"}),(0,r.jsx)(t.td,{children:"Returns a 32-bit double if the DataToken contains a double or any other numeric type. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Returns a string if the DataToken contains a string. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataDictionary"}),(0,r.jsx)(t.td,{children:"Returns a Data Dictionary if the DataToken contains a Data Dictionary. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DataList"}),(0,r.jsx)(t.td,{children:"Returns a Data List if the DataToken contains a Data List. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Reference"}),(0,r.jsx)(t.td,{children:"Returns an object reference if the DataToken contains an object reference. Otherwise, throws an exception."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Error"}),(0,r.jsx)(t.td,{children:"Returns the error associated with this token. Otherwise, returns DataError.None. Unlike others, accessing this property will never throw an exception. If you attempt to access Error from a token that is not an error, it will simply return DataError.None."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Function"}),(0,r.jsx)(t.th,{children:"Result"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bitcast"}),(0,r.jsx)(t.td,{children:"Reuse the existing data in the DataToken but change the type. Like reinterpret_cast in C++, or BitConverter in C#. Will truncate the value if the destination type is smaller than the source type, or zero-extend if the destination type is larger than the source type. Only works on primitive types and returns a copy."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ToString"}),(0,r.jsx)(t.td,{children:"Converts the contents of the token to a string. Unlike accessing the String property, this function will always succeed because it will use the underlying value's ToString"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GetHashCode"}),(0,r.jsx)(t.td,{children:"Returns a hashcode of the contents of the token. This is mostly used for internal operations of dictionary keys."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CompareTo"}),(0,r.jsx)(t.td,{children:"Compares this token to another token, returning -1 if the other token is larger, 0 if they are equal, and 1 if the other token is smaller. Containers such as lists and dictionaries will be compared by count. When comparing two tokens that are not the same type and not numerical values, they will use the ordering of the TokenType enum."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"creating-data-tokens",children:"Creating Data Tokens"}),"\n",(0,r.jsx)(t.h3,{id:"udonsharp",children:"UdonSharp"}),"\n",(0,r.jsxs)(t.p,{children:['In UdonSharp, DataTokens can be created "implicitly" which means that when a function asks for a DataToken, you do not need to do ',(0,r.jsx)(t.code,{children:"new DataToken(value)"}),". Instead you can just pass the value in directly and it will create a DataToken for you automatically."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'title="DataToken Creation"',children:'// You could do this\r\nDataToken _explicitFloat = new DataToken(5.3f);\r\nDataToken _explicitInt = new DataToken(5);\r\nDataToken _explicitString = new DataToken("value");\r\nDataToken _explicitBool = new DataToken(true);\r\n\r\n// But this is easier and simpler\r\nDataToken _float = 5.3f;\r\nDataToken _Int = 5;\r\nDataToken _String = "value";\r\nDataToken _Bool = true;\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Don't use ",(0,r.jsx)(t.code,{children:"nameof()"})," to implicitly create DataTokens in UdonSharp, or you may run into errors."]})}),"\n",(0,r.jsx)(t.h3,{id:"udon-graph",children:"Udon Graph"}),"\n",(0,r.jsxs)(t.p,{children:["In Udon Graph, you'll need to use the ",(0,r.jsx)(t.code,{children:"DataToken Implicit"})," or ",(0,r.jsx)(t.code,{children:"DataToken Constructor"})," nodes to create a DataToken with the value inside.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"data-tokens-7GAcVrY.png",src:n(1199).A+"",width:"1442",height:"954"})]}),"\n",(0,r.jsx)(t.h2,{id:"getting-values-out-of-a-data-token",children:"Getting values out of a Data Token"}),"\n",(0,r.jsx)(t.p,{children:"Before getting a value out of a DataToken you need to be sure of what type it contains because if you try to pull an incompatible type, it will halt your UdonBehaviour. There are several ways to ensure that the type contained is compatible with what you want to pull out."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You can check the ",(0,r.jsx)(t.code,{children:"DataToken.TokenType"})," property to get the exact type"]}),"\n",(0,r.jsxs)(t.li,{children:["When retrieving a value out of a Data List or Data Dictionary, you can use ",(0,r.jsx)(t.code,{children:"TryGetValue"})," and specify a TokenType. If the TokenType is incorrect, that function will return false."]}),"\n",(0,r.jsxs)(t.li,{children:["You can check the ",(0,r.jsx)(t.code,{children:"DataToken.IsNumber"})," property to get if it is a number. If it is, then you can safely pull the ",(0,r.jsx)(t.code,{children:"Number"})," property which will give you a double upcasted from whichever type it actually was. This may lose precision if the type was ",(0,r.jsx)(t.code,{children:"long"})," or ",(0,r.jsx)(t.code,{children:"ulong"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Regardless of the type of the token, ",(0,r.jsx)(t.code,{children:"ToString"})," is always a valid option and will never throw errors."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'title="DataToken Retrieval in U#"',children:"// If we know that it's a string, we can safely pull the string out of the token\r\nif (unknownToken.TokenType == TokenType.String)\r\n{\r\n    Debug.Log(unknownToken.String);\r\n}\r\n\r\n// We can use IsNumber to see if it's some type of number, even if we don't know which.\r\nif (unknownToken.IsNumber)\r\n{\r\n    Debug.Log(unknownToken.Number);\r\n}\r\n\r\n// If we're pulling a value from a container, we can use the version that does its own type check\r\nif (dictionary.TryGetValue(\"key\", TokenType.String, out DataToken value))\r\n{\r\n    Debug.Log(value.String);\r\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"data-tokens-SqQqE5w.png",src:n(49115).A+"",width:"1041",height:"1018"})}),"\n",(0,r.jsxs)(t.p,{children:["Once you are sure that you have the right type, you can get the value out of the DataToken by accessing value properties such as ",(0,r.jsx)(t.code,{children:"DataToken.Float"})," and ",(0,r.jsx)(t.code,{children:"DataToken.Boolean"}),". Each type has it's own property which can be used to pull that specific type out."]}),"\n",(0,r.jsx)(t.p,{children:"If you have complete control over the data that you're working with, then you can skip all the TokenType checking and just get the value from the token directly. This can save some extra code, but make sure that you're not doing this if the data is coming from an outside source or there is any possibility that the type could be something else."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of Shorthand Bracket syntax"',children:'dictionary["A"] = 5;\r\ndictionary["B"] = 10;\r\n\r\n// This makes the assumption that A and B will always contain integers.\r\n// This is a safe assumption to make since we set them just above in a controlled environment.\r\n// If the data is coming from an external source, we shouldn\'t make these assumptions!\r\nint sum = dictionary["A"].Int + dictionary["B"].Int;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsx)(t.p,{children:"When operations on a Data List or Data Dictionary fail and give a DataToken back, they will produce an error token. Error tokens contain both an enum classifying the type of error, as well as a string that elaborates on the error more specifically. Not all errors will produce a string because there is no need to elaborate further."}),"\n",(0,r.jsxs)(t.p,{children:["If you have an Error token, you can use ",(0,r.jsx)(t.code,{children:"DataToken.Error"})," to get the error enum and ",(0,r.jsx)(t.code,{children:"DataToken.String"})," to get the message. You can also use ",(0,r.jsx)(t.code,{children:"DataToken.ToString()"})," which will automatically combine the enum and the string into a nice complete message, which makes it convenient to simply call ",(0,r.jsx)(t.code,{children:"Debug.Log(token)"})]}),"\n",(0,r.jsx)(t.p,{children:"An error token can be one of several different things:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KeyDoesNotExist"}),(0,r.jsx)(t.td,{children:"You tried to access a key from a data dictionary but that key does not exist"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"IndexOutOfRange"}),(0,r.jsx)(t.td,{children:"You tried to access an index from a data array but that index was either less than 0 or greater than or equal to the count of the array."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TypeMismatch"}),(0,r.jsx)(t.td,{children:"You tried to access a value but the value was not the type you expected. Note that this can only happen if you are using a version of TryGetValue that accepts a type."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TypeUnsupported"}),(0,r.jsx)(t.td,{children:"The data container had a type that is not supported by the serialization format you tried to use. This can happen if you put reference tokens into a Data Container and then try to serialize it into Json."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ValueUnsupported"}),(0,r.jsx)(t.td,{children:"The data container had a value that is not supported by the serialization format you tried to use. This can happen if you put NaN or Infinity floats into a Data Container and then try to serialize it into Json."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"UnableToParse"}),(0,r.jsx)(t.td,{children:"The serialized format could not be parsed. This happens if the source Json is invalid."})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",metastring:'title="TryGetValue with TokenType"',children:'if (dictionary.TryGetValue("key", TokenType.Float out DataToken value)) {\r\n    // If TryGetValue succeeds, we can do things with the token\r\n    Debug.Log($"Successfully retrieved value {token.Float}");\r\n} else {\r\n    // If TryGetValue fails, the token will instead be an error\r\n    Debug.Log($"Failed to retrieve value with error {token.Error}");\r\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"data-tokens-zcqKePv.png",src:n(99144).A+"",width:"967",height:"385"})}),"\n",(0,r.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(t.h3,{id:"what-is-the-difference-between-string-and-tostring",children:"What is the difference between String and ToString?"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"DataToken.String"})," and ",(0,r.jsx)(t.code,{children:"DataToken.ToString()"})," are similar but not quite the same, because ",(0,r.jsx)(t.code,{children:"DataToken.String"})," is specifically accessing the string value inside the DataToken, while ",(0,r.jsx)(t.code,{children:"DataToken.ToString()"})," is converting whatever exists into a string."]}),"\n",(0,r.jsxs)(t.p,{children:["As a result, ",(0,r.jsx)(t.code,{children:"ToString"})," is always valid no matter what the DataToken contains and will never halt your UdonBehaviour. If it contains a bool, then it will give you either true or false. If it contains a number, it will create a string representation of that number using ",(0,r.jsx)(t.code,{children:'ToString("G", CultureInfo.InvariantCulture)'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["On the other hand, accessing ",(0,r.jsx)(t.code,{children:"DataToken.String"})," is only valid if the DataToken contains a string. If the DataToken contains a float and you attempt to access ",(0,r.jsx)(t.code,{children:"DataToken.String"}),", then an exception will be thrown and your UdonBehaviour will halt."]}),"\n",(0,r.jsxs)(t.p,{children:["DataErrors are unique in that they contain both an Error enum and a string. It is recommended to use ",(0,r.jsx)(t.code,{children:"ToString()"})," on DataErrors simply because ",(0,r.jsx)(t.code,{children:"ToString()"})," will combine the enum and the string together into a single message that contains both the error and the reason for the error."]}),"\n",(0,r.jsx)(t.h3,{id:"why-not-have-a-trygetvalue-that-gives-the-value-directly-skipping-tokens",children:"Why not have a TryGetValue that gives the value directly, skipping tokens?"}),"\n",(0,r.jsx)(t.p,{children:"It would be beneficial to have a TryGetValue method that directly provides the value, bypassing the need for tokens. This is a valid question as it can be tedious to constantly retrieve the token from the container and then access the value within the container separately. There have been several options considered to simplify this process, and one such solution that has been implemented is to include a built-in type check with TryGetValue."}),"\n",(0,r.jsx)(t.p,{children:"Another approach that was contemplated involved creating a generic version of TryGetValue where a system type is specified using a T argument. Although UdonSharp supports this approach (at least within static methods), Udon itself does not. Additionally, while this option would be advantageous, it would prevent the return of a DataError through the DataToken in case of an error, resulting in the default value being returned instead. Ultimately, we chose not to implement this approach as it would conceal the error from the user and make it more difficult to identify the problem. Fortunately, users have the ability to create their own solution for generic value retrieval using UdonSharp. This is made possible due to the availability of Generics, Statics, and extension methods within UdonSharp."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},49115:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-tokens-SqQqE5w-9879a512777a8e85a7dace1ba4de51f6.png"},99144:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-tokens-zcqKePv-58091387d7d480d864162f8915d38844.png"}}]);