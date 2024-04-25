import { LabelConfig } from "@/libs/repositories/definition"

const closeDuplicateLabel: LabelConfig = {
  name: "Close: Duplicate",
  description: "重複しているもの(他のIssueやpull requestで対応する)",
  color: "dcdcdc",
}

const closeInvalidLabel: LabelConfig = {
  name: "Close: Invalid",
  description: "誤り",
  color: "dcdcdc",
}

const closeWontFixLabel: LabelConfig = {
  name: "Close: WontFix",
  description: "対応しない",
  color: "dcdcdc",
}

const dependenciesLabel: LabelConfig = {
  name: "dependencies",
  description: "依存ライブラリに関するラベル",
  color: "ededed",
}

const priorityHighLabel: LabelConfig = {
  name: "Priority: High",
  description: "優先度：高",
  color: "ff4500",
}

const priorityMediumLabel: LabelConfig = {
  name: "Priority: Medium",
  description: "優先度：中",
  color: "ffd700",
}

const priorityLowLabel: LabelConfig = {
  name: "Priority: Low",
  description: "優先度：低",
  color: "4169e1",
}

const releaseNoteIgnoredLabel: LabelConfig = {
  name: "Release note ignored",
  description: "リリースノートへの記載しない",
  color: "859179",
}

const renovateLabel: LabelConfig = {
  name: "renovate",
  description: "",
  color: "ededed",
}

const typeBugLabel: LabelConfig = {
  name: "Type: Bug",
  description: "バグ関連",
  color: "ff0000",
}

const typeDiscussionLabel: LabelConfig = {
  name: "Type: Discussion",
  description: "議論にが必要",
  color: "14D658",
}

const typeDocumentLabel: LabelConfig = {
  name: "Type: Document",
  description: "ドキュメント",
  color: "40e0d0",
}

const typeEnhancementLabel: LabelConfig = {
  name: "Type: Enhancement",
  description: "機能強化",
  color: "89058a",
}

const typeFeatureLabel: LabelConfig = {
  name: "Type: Feature",
  description: "新機能",
  color: "00bfff",
}

const typeHelpWantedLabel: LabelConfig = {
  name: "Type: Help Wanted",
  description: "他者のヘルプを求む",
  color: "da70d6",
}

const typePublishingLabel: LabelConfig = {
  name: "Type: Publishing",
  description: "公開に伴う作業",
  color: "00ff00",
}

const typeQuestionLabel: LabelConfig = {
  name: "Type: Question",
  description: "Q＆A",
  color: "F8950F",
}

const typeRefactoringLabel: LabelConfig = {
  name: "Type: Refactoring",
  description: "リファクタリング",
  color: "fa8072",
}

const typeSpecificationChangeLabel: LabelConfig = {
  name: "Type: Specification Change",
  description: "仕様変更",
  color: "fc707d",
}

const typeTestLabel: LabelConfig = {
  name: "Type: Test",
  description: "テスト",
  color: "008000",
}

export const defaultLabelConfigs: LabelConfig[] = [
  closeDuplicateLabel,
  closeInvalidLabel,
  closeWontFixLabel,

  dependenciesLabel,
  releaseNoteIgnoredLabel,
  renovateLabel,

  priorityHighLabel,
  priorityMediumLabel,
  priorityLowLabel,

  typeBugLabel,
  typeDiscussionLabel,
  typeDocumentLabel,
  typeEnhancementLabel,
  typeFeatureLabel,
  typeHelpWantedLabel,
  typePublishingLabel,
  typeQuestionLabel,
  typeRefactoringLabel,
  typeSpecificationChangeLabel,
  typeTestLabel,
]
