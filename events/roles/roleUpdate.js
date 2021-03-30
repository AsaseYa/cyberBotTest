module.exports = async(client, role) => {
     const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
          limit: 1,
          type: "ROLE_UPDATE",
     });
     const latestRoleUpdate = fetchGuildAuditLogs.entries.first();


     console.log(latestRoleUpdate.changes[0].new);
     await client.updateRole(role.id, { name: latestRoleUpdate.changes[0].new })


     


}