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

export const findAllEvacuee = async () => {
  return [
    {
      id: "1",
      fullName: "山田 太郎",
      birthDate: new Date("1980-01-01"),
      gender: "男性",
      requiresSupport: false,
      healthCondition: "良好",
      medicalNeeds: "なし",
      allergy: "なし", 
      specialNotes: "",
      publicInfo: true,
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01")
    },
    {
      id: "2", 
      fullName: "鈴木 花子",
      birthDate: new Date("1990-06-15"),
      gender: "女性",
      requiresSupport: true,
      healthCondition: "高血圧",
      medicalNeeds: "降圧剤を服用中",
      allergy: "花粉症",
      specialNotes: "車いす使用",
      publicInfo: false,
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02")
    }
  ]
}
