var ShaderConstant;
(function (ShaderConstant) {
    /** 基础顶点着色器 */
    ShaderConstant["VERTEX"] = "vertex.glsl";
    /** 基础片元着色器 */
    ShaderConstant["FRAFMENT"] = "fragment.glsl";
    /** 点、圆 片元着色器 */
    ShaderConstant["F_POINT"] = "f_point.glsl";
    /** 波浪 片元着色器 */
    ShaderConstant["F_RIPPLE"] = "f_ripple.glsl";
    /** 摇晃 片元着色器 */
    ShaderConstant["F_SHAKE"] = "f_shake.glsl";
    /** 简单黑白块 片元着色器 */
    ShaderConstant["F_SIMPLE"] = "f_simple.glsl";
    /** sin波浪 片元着色器 */
    ShaderConstant["F_SIN"] = "f_sin.glsl";
    /** 水，流体 片元着色器 */
    ShaderConstant["F_WATER"] = "f_water.glsl";
    /** loading 片元着色器 */
    ShaderConstant["F_LOADING"] = "f_loading.glsl";
    /** mvp矩阵 片元着色器 */
    ShaderConstant["F_MVP"] = "f_mvp.glsl";
    /** 爆炸 片元着色器 */
    ShaderConstant["F_BOOM"] = "f_boom.glsl";
    /** 分形 片元着色器 */
    ShaderConstant["F_JULIA"] = "f_julia.glsl";
    /** 溶解 片元着色器*/
    ShaderConstant["F_FADE"] = "f_fade.glsl";
    /** 折叠效果 片元着色器 */
    ShaderConstant["F_FOLD"] = "f_fold.glsl";
    /** 高斯模糊 片元着色器 */
    ShaderConstant["F_BLUR"] = "f_blur.glsl";
    /** mvp矩阵 顶点着色器 */
    ShaderConstant["V_MVPMAT"] = "v_mvpMat.glsl";
})(ShaderConstant || (ShaderConstant = {}));
