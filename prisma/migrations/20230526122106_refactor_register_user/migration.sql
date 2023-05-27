-- AddForeignKey
ALTER TABLE "register_users" ADD CONSTRAINT "register_users_register_entity_id_fkey" FOREIGN KEY ("register_entity_id") REFERENCES "register_entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "register_users" ADD CONSTRAINT "register_users_register_permission_id_fkey" FOREIGN KEY ("register_permission_id") REFERENCES "register_permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
