# PoseNet Camera example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

PoseNet model in realtime, modified from [with-tfjs-camera](https://github.com/expo/examples/tree/master/with-tfjs-camera)

Identify poses with `@tensorflow/tfjs`, `expo-camera`, and `expo-gl` (for native acceleration).


## 🚀 How to use

#### 1. run this command:
> `npx create-react-native-app my-app -t with-tfjs-camera`

#### 2. change directory to `my-app`:
>`cd my-app`

#### 3. check that the with-tfjs-camera model works:
- Run `expo start`, open on a native device (simulator, emulator, and browser are not supported).

#### 4. run this command:
> `npm i @tensorflow-models/posenet`

#### 5. clone this repository into a new and different folder:
> `git clone https://github.com/jude253/posenet-react-native`

#### 6. copy the files `ModelView.js` and `PredictionList.js` from `posenet-react-native/src` to `my-app/src` and overwrite the files in `my-app/src`

#### 7. change directories to `my-app`:
>`cd my-app`

#### 8. check that the posenet model works:
- Run `expo start`, open on a native device (simulator, emulator, and browser are not supported).

#### 9. stop server:
- hit `control + c` in terminal

#### 10. convert expo managed project to expo bare workflow:
- hit `control + c` in terminal

- You can swap out `@tensorflow-models/posenet` for another [TensorFlow model](https://github.com/tensorflow/tfjs-models) to achieve different results.




## 📝 Notes

- the number at the bottom of the camera UI is the confince the posenetmodel has in its predictions
- the prediction output of the model is logged to the console.
- the predictions are generated in `ModelView.js`
- `PredictionList.js` is where the predictions are turned into a UI element.

- [TFJS Expo API reference](https://js.tensorflow.org/api_react_native/latest/#Media-Camera)
- [`@tensorflow/tfjs-react-native` package](https://www.npmjs.com/package/@tensorflow/tfjs-react-native)
- [Expo Camera docs](https://docs.expo.io/versions/latest/sdk/camera/)
