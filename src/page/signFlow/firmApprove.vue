<template>
    <div class="fillcontain">
        <div class="firmApprove">
            <el-steps :space="200" :active="active" simple>
                <el-step title="认证企业身份" icon="iconfont icon-dengjibao"></el-step>
                <el-step title="申请电子签章" icon="iconfont icon-guanyuwomen_pingtai_dianziqianzhang"></el-step>
                <el-step title="录入信息成功" icon="iconfont icon-rongzi"></el-step>
            </el-steps>
            <div class="flow" v-if="active == 0">
                <div class="step">
                    <el-form label-position="left"  ref="ruleForm" label-width="20%" class="demo-ruleForm">
                        <div class="title">
                            <span class="sub">1</span> 机构基本信息
                        </div>
                        <div class="body">
                            <el-form-item label="企业名称">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="所属行业">
                                <el-select v-model="ruleForm.region" placeholder="请选择所属行业">
                                    <el-option label="行业一" value="shanghai"></el-option>
                                    <el-option label="行业二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="统一社会信用代码">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="注册资金（元）">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="营业期限">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
                                <el-checkbox v-model="ruleForm.checked">长期</el-checkbox>
                            </el-form-item>
                            <el-form-item label="单位注册地址">
                                <el-cascader  size="large" :options="ruleForm.options" v-model="selectedOptions" @change="handleChange"></el-cascader>
                                <el-input style="width: 40%;" v-model="ruleForm.input" placeholder="详细地址"></el-input>
                            </el-form-item>
                            <el-form-item label="经营地址">
                                <el-input v-model="ruleForm.name" placeholder="可发邮件地址"></el-input>
                            </el-form-item>
                            <el-form-item label="邮政编码">
                                <el-input v-model="ruleForm.name" placeholder="请输入邮政编码"></el-input>
                            </el-form-item>
                            <el-form-item label="企业联系电话">
                                <el-input v-model="ruleForm.name" placeholder="请输入企业联系电话（格式：0107654321）"></el-input>
                            </el-form-item>
                            <el-form-item label="企业电子邮箱">
                                <el-input v-model="ruleForm.name" placeholder="请输入企业电子邮箱地址"></el-input>
                            </el-form-item>
                            <el-form-item label="营业执照">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    multiple>
                                    <el-button size="small" type="primary">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </el-form-item>
                        </div>
                        <div class="title">
                            <span class="sub">2</span> 法定代表人
                        </div>
                        <div class="body">
                            <el-form-item label="法定代表人姓名">
                                <el-input v-model="ruleForm.name" placeholder="请填写法定代表人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="所属行业">
                                <el-select v-model="ruleForm.region" placeholder="请选择所属行业">
                                <el-option label="行业一" value="shanghai"></el-option>
                                <el-option label="行业二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="证件号码">
                                <el-input v-model="ruleForm.name" placeholder="身份证"></el-input>
                            </el-form-item>
                            <el-form-item label="证件有效期">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
                                <el-checkbox v-model="ruleForm.checked">长期</el-checkbox>
                            </el-form-item>
                            <el-form-item label="证件扫描件">
                                <div class="el-upload__tip">（原件照片、扫描件或者复印件加盖企业公章后的扫描件，支持.jpg.png.pdf格式，大小不超过20M）</div>
                                <el-upload class="upload-demo" multiple action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传正面</el-button>
                                </el-upload>
                                <el-upload class="upload-demo" multiple action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传反面</el-button>
                                </el-upload>
                            </el-form-item>
                        </div>
                        <div class="title">
                            <span class="sub" style="vertical-align: bottom;">3</span><div>经办人信息<br><i>经办人信息将用于企业电子签章的申请和使用，请谨慎填写。</i></div>
                        </div>
                        <div class="body">
                            <el-form-item label="经办人姓名">
                                <el-input v-model="ruleForm.name" placeholder="请填写法定代表人姓名"></el-input>
                            </el-form-item>
                            <el-form-item label="证件类型">
                                <el-select v-model="ruleForm.region">
                                    <el-option label="身份证" value="shanghai"></el-option>
                                    <el-option label="驾驶证" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="证件号码">
                                <el-input v-model="ruleForm.name" placeholder="请填写证件号码"></el-input>
                            </el-form-item>
                            <el-form-item label="证件有效期">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
                                <el-checkbox v-model="ruleForm.checked">长期</el-checkbox>
                            </el-form-item>
                            <el-form-item label="职务">
                                <el-input v-model="ruleForm.name" placeholder="请填写"></el-input>
                            </el-form-item>
                            <el-form-item label="电子邮箱">
                                <el-input v-model="ruleForm.name" placeholder="请填写"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input v-model="ruleForm.name" placeholder="请填写"></el-input>
                            </el-form-item>
                            <el-form-item label="证件扫描件">
                                <div class="el-upload__tip">企业用户点击下载《法人授权委托书》模板，盖章后上传原件照片、扫描件，支持.jpg .png .pdf格式，大小不超过20M）</div>
                                <el-upload class="upload-demo" multiple action="https://jsonplaceholder.typicode.com/posts/">
                                    <el-button size="small" type="primary">上传文件</el-button>
                                </el-upload>
                            </el-form-item>
                        </div>
                    </el-form>
                    <el-button type="primary" @click="active++">提交</el-button>
                </div>
            </div>
            <div class="flow" v-if="active == 1">
                <div class="come">
                    <h3>***企业，您的机构信息登记成功</h3>
                    <p>接下来需要为您的机构申请手机电子签章</p>
                    <p class="line"><i></i>为什么要申请电子签章？<i></i></p>
                    <div>
                        <span>
                            <i class="iconfont icon-hetong1"></i> <br>
                            签署合同
                        </span>
                        <span>
                            <i class="iconfont icon-icon-power-fi-security"></i> <br>
                            安全保障
                        </span>
                        <span>
                            <i class="iconfont icon-pingtai1"></i> <br>
                            多平台支持
                        </span>
                        <span>
                            <i class="iconfont icon-sifa"></i> <br>
                            司法鉴定
                        </span>
                    </div>
                    <el-button type="primary" @click="active++">下一步</el-button>
                </div>
            </div>
            <div class="flow" v-if="active == 2">
                <div class="step">
                    <div class="title">
                        <span class="sub">1</span> 经办人信息
                    </div>
                    <div class="body">
                        <ul>
                            <li><span>经办人姓名</span><span>周六</span></li>
                            <li><span>证件类型</span><span>身份证</span></li>
                            <li><span>证件有效期</span><span>至2026-08-09</span></li>
                            <li><span>证件号码</span><span>JA012098787666677889</span></li>
                            <li><span>职务</span><span>COO</span></li>
                            <li><span>手机号码</span><span>18978953426</span></li>
                            <li><span>电子邮箱</span><span>1234567@163.com</span></li>
                            <li><span>经办人授权书</span><span></span></li>
                        </ul>
                    </div>
                    <div class="title">
                        <span class="sub">2</span> 手机电子签章须知
                    </div>
                    <div class="body">
                        <p class="tice"><span>1</span> 企业身份认证通过后，会给经办人手机发送短信开通信息，请妥善保管。</p>
                        <p class="tice"><span>2</span> 企业每次签订电子合同，会给经办人手机号发送验证码，输入验证码电子合同签章成功。</p>
                    </div>
                    <div class="mb">
                        <el-checkbox v-model="ruleForm.checked" label="我已认真阅读并同意"></el-checkbox>
                        <a href="#" style="color:#4A6CD5">《用户注册协议》</a>
                    </div>
                    <el-button type="primary" @click="active++">提交</el-button>
                    <br>
                    <el-button type="text" @click="active = 0">返回修改企业信息</el-button>
                </div>
            </div>
            <div class="flow" v-if="active == 3">
                <div class="come">
                    <h3>您的电子签章申请成功，并已获得【银行/企业的业务资格】</h3>
                    <div class="scuuer">
                        签章企业：xxx企业
                        <br>
                        <br>
                        签章手机：18978953426
                    </div>
                    <el-button type="primary" @click="next">开启融资之旅</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { regionData ,CodeToText } from 'element-china-area-data'
export default {
  data() {
    return {
      active: 0,
      ruleForm: {
        name: "",
        name1: "",
        region: "",
        date1: "",
        type: [],
        checked:'',
        number:'',
        options: regionData,
        input:'',
      },
      selectedOptions:'',
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
      }
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      handleChange (value) {
        console.log(this.selectedOptions)
      },
    next() {
      this.$router.push('myBanchBacklog')
    }
  },
  watch: {}
};
</script>

<style lang="less">
@import "../../style/mixin";
.firmApprove {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fff;
  z-index: 99;
  .el-steps--simple {
    background: #fff;
    width: 40%;
    padding: 40px 30%;
    border-bottom: 1px solid #dcdcdc;
  }
  .flow {
    width: 60%;
    margin: 0 auto;
    .step{
        font-size: 14px;
        text-align: center;
        .title{
            text-align: left;
            padding: 20px 0;
            font-weight: 700;
            >span{
                display: inline-block;
                width: 33px;
                height: 33px;
                line-height: 33px;
                text-align: center;
                border: 1px solid #D3DADE;
                border-radius: 50%;
                margin-right: 10px;
            }
            >div{
                width:60%;
                display:inline-block;
                >i{
                    font-size:12px;
                    color: #FF7F22;
                }
            }
        }
        .body{
            padding: 20px 30px;
            border: 1px solid #DCE2E4;
            margin-bottom: 20px;
            text-align: left;
            .el-form-item__content{
                >.el-input{
                    width: 60%;
                }
                >.el-select{
                    width: 60%;
                }
                .el-checkbox{  //长期按钮
                    display: inline-block;
                }
            }
            .upload-demo{
                display: inline-block;
                margin: 0 40px;
            }
            >ul{
                overflow: hidden;
                font-size: @fs-two;
                li{
                    width: 50%;
                    box-sizing: border-box;
                    float: left;
                    line-height: 35px;
                    >span:first-child{
                        width: 30%;
                        display: inline-block;
                        font-weight: 700;
                    }
                }
            }
            >.tice{
                line-height: 30px;
                font-size: 14px;
                >span{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    text-align: center;
                    color: #fff;
                    border-radius: 50%;
                    margin-right: 10px;
                    background-color: #646464;
                }
            }
        }
        >.el-button{
            width: 150px;
        }
    }
    .come{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding: 40px 0;
        >h3{
            margin-bottom: 30px;
            font-size: 22px;
        }
        >p{
            font-size: @fs-one;
            line-height: 22px;
            color: @fs-color;
        }
        >.line{
            font-size: @fs-two;
            margin-top: 80px;
            margin-bottom: 30px;
            >i{
                width: 200px;
                height: 1px;
                display: inline-block;
                background-color: #DCDCDC;
                vertical-align: middle;
                margin: 0 30px;
            }
        }
        >div{
            margin-bottom: 40px;
            >span{
                width:20%;
                display: inline-block;
                box-sizing: border-box;
                color: #646464;
                font-size: @fs-two;
                i{
                    font-size: 40px;
                }
            }
        }
        >.el-button{
            width: 150px;
        }
        >.scuuer{
            padding: 30px 0;
            border: 1px solid #DCDCDC;
        }
    }
    
  }
}
</style>
