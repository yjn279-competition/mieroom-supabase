export type Evacuee = {
  id: string  // 避難者ID
  fullName: string  // 氏名
  birthDate: Date  // 生年月日
  gender: string  // 性別
  requiresSupport: boolean  // 要配慮者フラグ
  healthCondition: string  // 健康状態
  medicalNeeds: string  // 医療・服薬等の有無
  allergy: string  // アレルギー
  specialNotes: string  // 特記事項
  publicInfo: boolean  // 情報公開可否
  createdAt: Date  // 登録日時
  updatedAt: Date  // 更新日時
}
