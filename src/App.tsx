import "./App.css";
import HomeButton from "./components/HomeButton";
import RoomScene from "./components/RoomScene";

function App() {
  return (
    <div className="app-container">
      <main>
        <RoomScene />
        <div className="button-container">
          <HomeButton />
        </div>

        <div className="desc-container">
          <h1>描述</h1>
          <p>
            这是一个适配PC浏览器的简易三维场景展示。实现功能包含动态物体模型位置及转动角度；相机的运动及焦点追踪；实时柔和阴影；两种灯光分别为方向性灯光和聚光投射灯光；泛光Bloom后处理效果。
          </p>
          <p>
            依托于@react-three/fiber的React渲染封装，用JSX声明式语法编辑场景，代码实现较原生three.js大大简化，加快开发速度。
          </p>
          <p>
            主要依赖：
            <span>
              <a>React</a>
            </span>
            ，
            <span>
              <a>three.js</a>
            </span>
            ，
            <span>
              <a>@react-three/fiber</a>
            </span>
            ，
            <span>
              <a>@react-three/drei</a>
            </span>
            ，
            <span>
              <a>@react-three/postprocessing</a>
            </span>
            。
          </p>

          <div className="reference-container">
            资源引用：
            <ul>
              <li>
                场景模型：
                <a href="https://skfb.ly/6CxVY" target="_blank">
                  https://skfb.ly/6CxVY
                </a>
              </li>
              <li>
                瓷碗模型：
                <a href="https://skfb.ly/oOTQ7" target="_blank">
                  https://skfb.ly/oOTQ7
                </a>
              </li>
              <li>
                桌子模型：
                <a href="https://skfb.ly/o9VQu" target="_blank">
                  https://skfb.ly/o9VQu
                </a>
              </li>
              <li>
                植物1模型：
                <a href="https://skfb.ly/oWxwB" target="_blank">
                  https://skfb.ly/oWxwB
                </a>
              </li>
              <li>
                植物2模型：
                <a href="https://skfb.ly/oAEoM" target="_blank">
                  https://skfb.ly/oAEoM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer>
        鲁ICP备<span>2022041953号-1</span>
      </footer>
    </div>
  );
}

export default App;
