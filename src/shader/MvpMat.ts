class MvpMat extends BaseEuiView {
    constructor() {
        super();
    }


    protected async initUI() {
        let sky = new eui.Image("bg_jpg");
        this.addChild(sky);
        const stage = egret.MainContext.instance.stage;
        let stageW = stage.stageWidth;
        let stageH = stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        
        const push = (arr, x) => { arr[arr.length] = x }
 
        // 生成将图像等分为 n x n 矩形的数据
        const initParticlesData =  n => {
            const [positions, centers, texCoords, indices] = [[], [], [], []]
            
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                const [x0, x1] = [i / n, (i + 1) / n] // 每个粒子的 x 轴左右坐标
                const [y0, y1] = [j / n, (j + 1) / n] // 每个粒子的 y 轴上下坐标
                const [xC, yC] = [x0 + x1 / 2, y0 + y1 / 2] // 每个粒子的中心二维坐标
                const h = 0.5 // 将中心点从 (0.5, 0.5) 平移到原点的偏移量
            
                // positions in (x, y), z = 0
                push(positions, x0 - h); push(positions, y0 - h)
                push(positions, x1 - h); push(positions, y0 - h)
                push(positions, x1 - h); push(positions, y1 - h)
                push(positions, x0 - h); push(positions, y1 - h)
            
                // texCoords in (x, y)
                push(texCoords, x0); push(texCoords, y0)
                push(texCoords, x1); push(texCoords, y0)
                push(texCoords, x1); push(texCoords, y1)
                push(texCoords, x0); push(texCoords, y1)
            
                // center in (x, y), z = 0
                push(centers, xC - h); push(centers, yC - h)
                push(centers, xC - h); push(centers, yC - h)
                push(centers, xC - h); push(centers, yC - h)
                push(centers, xC - h); push(centers, yC - h)
            
                // indices
                const k = (i * n + j) * 4
                push(indices, k); push(indices, k + 1); push(indices, k + 2)
                push(indices, k); push(indices, k + 2); push(indices, k + 3)
                }
            }
        
        // 着色器内的变量名是单数形式，将复数形式的数组名与其对应起来
            return {
                pos: positions,
                center: centers,
                texCoord: texCoords,
                index: indices
            }
        }
        console.log(initParticlesData(5));
        let customFilter = new egret.CustomFilter(await getShader(ShaderConstant.V_MVPMAT), await getShader(ShaderConstant.FRAFMENT), initParticlesData(10))
        this.filters = [customFilter];
        egret.startTick((timeStamp) => {
            customFilter.uniforms.time += 0.01;
            return false;
        }, this)
    }
}