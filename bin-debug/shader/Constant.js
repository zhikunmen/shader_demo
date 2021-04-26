var ShaderConstant;
(function (ShaderConstant) {
    /** 基础顶点着色器 */
    ShaderConstant["VERTEX"] = "vertex_glsl";
    /** 基础片元着色器 */
    ShaderConstant["FRAFMENT"] = "fragment_glsl";
    /** 点、圆 片元着色器 */
    ShaderConstant["F_POINT"] = "f_point_glsl";
    /** 波浪 片元着色器 */
    ShaderConstant["F_RIPPLE"] = "f_ripple_glsl";
    /** 摇晃 片元着色器 */
    ShaderConstant["F_SHAKE"] = "f_shake_glsl";
    /** 简单黑白块 片元着色器 */
    ShaderConstant["F_SIMPLE"] = "f_simple_glsl";
    /** sin波浪 片元着色器 */
    ShaderConstant["F_SIN"] = "f_sin_glsl";
    /** 水，流体 片元着色器 */
    ShaderConstant["F_WATER"] = "f_water_glsl";
    /** loading 片元着色器 */
    ShaderConstant["F_LOADING"] = "f_loading_glsl";
    /** mvp矩阵 片元着色器 */
    ShaderConstant["F_MVP"] = "f_mvp_glsl";
    /** 爆炸 片元着色器 */
    ShaderConstant["F_BOOM"] = "f_boom_glsl";
    /** mvp矩阵 顶点着色器 */
    ShaderConstant["V_MVPMAT"] = "v_mvpMat_glsl";
})(ShaderConstant || (ShaderConstant = {}));
