-- AlterTable
ALTER TABLE "register_access_authorizations" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_admin_types" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_background_types" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_change_legal_person" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_change_natural_person" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_change_organization_charts" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_change_resp_entities" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_counties" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_entitie_types" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_entities" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_legal_nature" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_legal_persons" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_natural_persons" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_chart_configs" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_organization_charts" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_photos" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_resp_entities" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_roles" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_roles_permissions" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_ufs" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_user_roles" ALTER COLUMN "first_user" DROP NOT NULL;

-- AlterTable
ALTER TABLE "register_users" ALTER COLUMN "first_user" DROP NOT NULL;
