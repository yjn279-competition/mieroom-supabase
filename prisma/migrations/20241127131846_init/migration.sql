-- CreateTable
CREATE TABLE "Evacuee" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "requiresSupport" BOOLEAN NOT NULL,
    "healthCondition" TEXT NOT NULL,
    "medicalNeeds" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,
    "specialNotes" TEXT NOT NULL,
    "publicInfo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evacuee_pkey" PRIMARY KEY ("id")
);
