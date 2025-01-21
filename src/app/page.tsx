import Card from "./components/card";
import FormButton, { ButtonType } from "./components/form-components/form-button";
import FormCard from "./components/form-components/form-card";
import FormInputText from "./components/form-components/form-input-text";
import Header1 from "./components/header-1"
import Header2 from "./components/header-2"
import Header3 from "./components/header-3"

export default function Home() {
  const header = (
    <Header2>全局配置</Header2>
  );

  const header_allModel = (
    <Header2>模型总数</Header2>
  );

  const header_allData = (
    <Header2>数据总数</Header2>
  );

  const footer = (
    <div className="flex">
      <div className="pr-2 w-32 h-10">
        <FormButton type={ButtonType.Submit}>保存配置</FormButton>
      </div>
      <div className="pr-2 w-32 h-10">
        <FormButton>重置配置</FormButton>
      </div>
    </div>
  )

  return (
    <div className="flex space-x-4 p-4 flex-col">
      <div className="pl-4 pb-4 select-none flex">
        <div className="flex-1">
          <Card header={header_allModel}>
            <div className="font-bold text-3xl text-gray-500">
              {12}
            </div>
          </Card>
        </div>
        <div className="m-2"></div>
        <div className="flex-1">
          <Card header={header_allData}>
            <div className="font-bold text-3xl text-gray-500">
              {12}
            </div>
          </Card>
        </div>
      </div>
      <FormCard header={header} footer={footer}>
        <FormInputText label={<Header3>项目路径：</Header3>} placeholder={"请输入文件路径"} />
      </FormCard>
    </div>
  );
}
