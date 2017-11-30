(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function processStatics(a2,a3){var h=Object.keys(a2)
for(var g=0;g<h.length;g++){var f=h[g]
if(f==="^")continue
var e=a2[f]
var d=f.charCodeAt(0)
var c
if(d===43){w[c]=f.substring(1)
var a0=a2[f]
if(a0>0)a2[c].$reflectable=a0
if(e&&e.length)init.typeInformation[c]=e}else if(d===42){n[c].$D=e
var a1=a2.$methodsWithOptionalArguments
if(!a1)a2.$methodsWithOptionalArguments=a1={}
a1[f]=c}else if(typeof e==="function"){n[c=f]=e
i.push(f)
init.globalFunctions[f]=e}else if(e.constructor===Array)addStubs(n,e,f,true,i)
else{}}}function addStubs(b5,b6,b7,b8,b9){var h=0,g=b6[h],f
if(typeof g=="string")f=b6[++h]
else{f=g
g=b7}var e=[b5[b7]=b5[g]=f]
f.$stubName=b7
b9.push(b7)
for(h++;h<b6.length;h++){f=b6[h]
if(typeof f!="function")break
if(!b8)f.$stubName=b6[++h]
e.push(f)
if(f.$stubName){b5[f.$stubName]=f
b9.push(f.$stubName)}}for(var d=0;d<e.length;h++,d++)e[d].$callName=b6[h]
var c=b6[h]
b6=b6.slice(++h)
var a0=b6[0]
var a1=a0>>1
var a2=(a0&1)===1
var a3=a0===3
var a4=a0===1
var a5=b6[1]
var a6=a5>>1
var a7=(a5&1)===1
var a8=a1+a6!=e[0].length
var a9=b6[2]
if(typeof a9=="number")b6[2]=a9+b
var b0=2*a6+a1+3
if(c){f=tearOff(e,b6,b8,b7,a8)
b5[b7].$getter=f
f.$getterStub=true
if(b8){init.globalFunctions[b7]=f
b9.push(c)}b5[c]=f
e.push(f)
f.$stubName=c
f.$callName=null}var b1=b6.length>b0
if(b1){e[0].$reflectable=1
e[0].$reflectionInfo=b6
for(var d=1;d<e.length;d++){e[d].$reflectable=2
e[d].$reflectionInfo=b6}var b2=b8?init.mangledGlobalNames:init.mangledNames
var b3=b6[b0]
var b4=b3
if(c)b2[c]=b4
if(a3)b4+="="
else if(!a4)b4+=":"+(a1+a6)
b2[b7]=b4
e[0].$reflectionName=b4
e[0].$metadataIndex=b0+1
if(a6)b5[b3+"*"]=e[0]}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+z+++"(x) {"+"if (c === null) c = "+"H.a"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+z+++"() {"+"if (c === null) c = "+"H.a"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,g){var h
return e?function(){if(h===void 0)h=H.a(this,c,d,true,[],f).prototype
return h}:tearOffGetter(c,d,f,g)}var z=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var y=init.libraries
var x=init.mangledNames
var w=init.mangledGlobalNames
var v=Object.prototype.hasOwnProperty
var u=a.length
var t=map()
t.collected=map()
t.pending=map()
t.constructorsList=[]
t.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var s=0;s<u;s++){var r=a[s]
var q=r[0]
var p=r[1]
var o=r[2]
var n=r[3]
var m=r[4]
var l=!!r[5]
var k=m&&m["^"]
if(k instanceof Array)k=k[0]
var j=[]
var i=[]
processStatics(m,t)
y.push([q,p,j,i,o,k,l,n])}}I.b=function(){}
var dart=[["","",,F,{"^":"",
c:[function(){},"$0","d",0,0,0,"main"]},1]]
setupProgram(dart,0)
var $=I.p
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={}
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,v:true}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.b=a.b
return Isolate}}(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.c,[])
else F.c([])})})()