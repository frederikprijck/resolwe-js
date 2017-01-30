/*
 * Type definitions
 *
 * Here is defined everything the API returns.
 */
"use strict";
function isResponsePaginated(response) {
    return response.hasOwnProperty('results');
}
exports.isResponsePaginated = isResponsePaginated;
exports.OWNER_PERMISSION = 'owner';
exports.SHARE_PERMISSION = 'share';
exports.EDIT_PERMISSION = 'edit';
exports.DELETE_PERMISSION = 'edit';
exports.ADD_PERMISSION = 'add';
exports.DOWNLOAD_PERMISSION = 'download';
exports.VIEW_PERMISSION = 'view';
exports.PUBLIC_PERMISSION_TYPE = 'public';
exports.GROUP_PERMISSION_TYPE = 'group';
exports.USER_PERMISSION_TYPE = 'user';
exports.RAW_PROCESS_PERSISTENCE = 'RAW';
exports.CACHED_PROCESS_PERSISTENCE = 'CAC';
exports.TEMP_PROCESS_PERSISTENCE = 'TMP';
exports.UPLOADING_DATA_STATUS = 'UP';
exports.RESOLVING_DATA_STATUS = 'RE';
exports.WAITING_DATA_STATUS = 'WT';
exports.PROCESSING_DATA_STATUS = 'PR';
exports.DONE_DATA_STATUS = 'OK';
exports.ERROR_DATA_STATUS = 'ER';
exports.DIRTY_DATA_STATUS = 'DR';

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGkvdHlwZXMvcmVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOztBQTJCSCw2QkFBdUMsUUFBMkI7SUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELGtEQUVDO0FBc0JZLFFBQUEsZ0JBQWdCLEdBQW9CLE9BQU8sQ0FBQztBQUM1QyxRQUFBLGdCQUFnQixHQUFvQixPQUFPLENBQUM7QUFDNUMsUUFBQSxlQUFlLEdBQW1CLE1BQU0sQ0FBQztBQUN6QyxRQUFBLGlCQUFpQixHQUFxQixNQUFNLENBQUM7QUFDN0MsUUFBQSxjQUFjLEdBQWtCLEtBQUssQ0FBQztBQUN0QyxRQUFBLG1CQUFtQixHQUF1QixVQUFVLENBQUM7QUFDckQsUUFBQSxlQUFlLEdBQW1CLE1BQU0sQ0FBQztBQVV6QyxRQUFBLHNCQUFzQixHQUF5QixRQUFRLENBQUM7QUFDeEQsUUFBQSxxQkFBcUIsR0FBd0IsT0FBTyxDQUFDO0FBQ3JELFFBQUEsb0JBQW9CLEdBQXVCLE1BQU0sQ0FBQztBQWlEbEQsUUFBQSx1QkFBdUIsR0FBMEIsS0FBSyxDQUFDO0FBQ3ZELFFBQUEsMEJBQTBCLEdBQTZCLEtBQUssQ0FBQztBQUM3RCxRQUFBLHdCQUF3QixHQUEyQixLQUFLLENBQUM7QUFtSXpELFFBQUEscUJBQXFCLEdBQXdCLElBQUksQ0FBQztBQUNsRCxRQUFBLHFCQUFxQixHQUF3QixJQUFJLENBQUM7QUFDbEQsUUFBQSxtQkFBbUIsR0FBc0IsSUFBSSxDQUFDO0FBQzlDLFFBQUEsc0JBQXNCLEdBQXlCLElBQUksQ0FBQztBQUNwRCxRQUFBLGdCQUFnQixHQUFtQixJQUFJLENBQUM7QUFDeEMsUUFBQSxpQkFBaUIsR0FBb0IsSUFBSSxDQUFDO0FBQzFDLFFBQUEsaUJBQWlCLEdBQW9CLElBQUksQ0FBQyIsImZpbGUiOiJhcGkvdHlwZXMvcmVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFR5cGUgZGVmaW5pdGlvbnNcclxuICpcclxuICogSGVyZSBpcyBkZWZpbmVkIGV2ZXJ5dGhpbmcgdGhlIEFQSSByZXR1cm5zLlxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gJ3J4JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IERpY3Rpb25hcnkgPSBfLkRpY3Rpb25hcnk7XHJcbmltcG9ydCBOdW1lcmljRGljdGlvbmFyeSA9IF8uTnVtZXJpY0RpY3Rpb25hcnk7XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFF1ZXJ5XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcclxuICAgIGxpbWl0PzogbnVtYmVyO1xyXG4gICAgb2Zmc2V0PzogbnVtYmVyO1xyXG4gICAgb3JkZXJpbmc/OiBzdHJpbmc7IC8vICctZmllbGQxLC1maWVsZDIsZmllbGQzJ1xyXG4gICAgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5T2JqZWN0IGV4dGVuZHMgUXVlcnkge1xyXG4gICAgaHlkcmF0ZV9kYXRhPzogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWVyeU9iamVjdEh5ZHJhdGVEYXRhIGV4dGVuZHMgUXVlcnkge1xyXG4gICAgaHlkcmF0ZV9kYXRhOiAnMSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc3BvbnNlUGFnaW5hdGVkPFQ+KHJlc3BvbnNlOiBUIHwgeyByZXN1bHRzOiBUfSk6IHJlc3BvbnNlIGlzIHsgcmVzdWx0czogVCB9IHtcclxuICAgIHJldHVybiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgncmVzdWx0cycpO1xyXG59XHJcblxyXG4vLyBMaW1pdE9mZnNldFBhZ2luYXRpb25cclxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0ZWRSZXNwb25zZTxUPiB7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgbmV4dDogc3RyaW5nO1xyXG4gICAgcHJldmlvdXM6IHN0cmluZztcclxuICAgIHJlc3VsdHM6IFRbXTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBQZXJtaXNzaW9uc1xyXG5cclxuZXhwb3J0IHR5cGUgT3duZXJQZXJtaXNzaW9uID0gJ293bmVyJztcclxuZXhwb3J0IHR5cGUgU2hhcmVQZXJtaXNzaW9uID0gJ3NoYXJlJztcclxuZXhwb3J0IHR5cGUgRWRpdFBlcm1pc3Npb24gPSAnZWRpdCc7XHJcbmV4cG9ydCB0eXBlIERlbGV0ZVBlcm1pc3Npb24gPSAnZWRpdCc7IC8vIG5vdCBhIHR5cG8gKEFQSSBkb2Vzbid0IHN1cHBvcnQgZGVsZXRlIHBlcm1pc3Npb24pXHJcbmV4cG9ydCB0eXBlIEFkZFBlcm1pc3Npb24gPSAnYWRkJztcclxuZXhwb3J0IHR5cGUgRG93bmxvYWRQZXJtaXNzaW9uID0gJ2Rvd25sb2FkJztcclxuZXhwb3J0IHR5cGUgVmlld1Blcm1pc3Npb24gPSAndmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgT1dORVJfUEVSTUlTU0lPTjogT3duZXJQZXJtaXNzaW9uID0gJ293bmVyJztcclxuZXhwb3J0IGNvbnN0IFNIQVJFX1BFUk1JU1NJT046IFNoYXJlUGVybWlzc2lvbiA9ICdzaGFyZSc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BFUk1JU1NJT046IEVkaXRQZXJtaXNzaW9uID0gJ2VkaXQnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT046IERlbGV0ZVBlcm1pc3Npb24gPSAnZWRpdCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUEVSTUlTU0lPTjogQWRkUGVybWlzc2lvbiA9ICdhZGQnO1xyXG5leHBvcnQgY29uc3QgRE9XTkxPQURfUEVSTUlTU0lPTjogRG93bmxvYWRQZXJtaXNzaW9uID0gJ2Rvd25sb2FkJztcclxuZXhwb3J0IGNvbnN0IFZJRVdfUEVSTUlTU0lPTjogVmlld1Blcm1pc3Npb24gPSAndmlldyc7XHJcblxyXG5leHBvcnQgdHlwZSBQZXJtaXNzaW9uID0gT3duZXJQZXJtaXNzaW9uIHwgU2hhcmVQZXJtaXNzaW9uIHwgRWRpdFBlcm1pc3Npb24gfCBEZWxldGVQZXJtaXNzaW9uIHwgQWRkUGVybWlzc2lvbiB8XHJcbiAgICBEb3dubG9hZFBlcm1pc3Npb24gfCBWaWV3UGVybWlzc2lvbjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBQdWJsaWNQZXJtaXNzaW9uVHlwZSA9ICdwdWJsaWMnO1xyXG5leHBvcnQgdHlwZSBHcm91cFBlcm1pc3Npb25UeXBlID0gJ2dyb3VwJztcclxuZXhwb3J0IHR5cGUgVXNlclBlcm1pc3Npb25UeXBlID0gJ3VzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBVQkxJQ19QRVJNSVNTSU9OX1RZUEU6IFB1YmxpY1Blcm1pc3Npb25UeXBlID0gJ3B1YmxpYyc7XHJcbmV4cG9ydCBjb25zdCBHUk9VUF9QRVJNSVNTSU9OX1RZUEU6IEdyb3VwUGVybWlzc2lvblR5cGUgPSAnZ3JvdXAnO1xyXG5leHBvcnQgY29uc3QgVVNFUl9QRVJNSVNTSU9OX1RZUEU6IFVzZXJQZXJtaXNzaW9uVHlwZSA9ICd1c2VyJztcclxuXHJcbmV4cG9ydCB0eXBlIFBlcm1pc3Npb25UeXBlID0gUHVibGljUGVybWlzc2lvblR5cGUgfCBHcm91cFBlcm1pc3Npb25UeXBlIHwgVXNlclBlcm1pc3Npb25UeXBlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGVtUGVybWlzc2lvbnNPZjxUPiB7XHJcbiAgICB0eXBlOiBQZXJtaXNzaW9uVHlwZTtcclxuICAgIHBlcm1pc3Npb25zOiBUW107XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEl0ZW1QZXJtaXNzaW9ucyA9IEl0ZW1QZXJtaXNzaW9uc09mPFBlcm1pc3Npb24+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRQZXJtaXNzaW9uc1JlcXVlc3Qge1xyXG4gICAgcHVibGljPzoge1xyXG4gICAgICAgIGFkZD86IFBlcm1pc3Npb25bXSxcclxuICAgICAgICByZW1vdmU/OiBQZXJtaXNzaW9uW11cclxuICAgIH07XHJcbiAgICBncm91cHM/OiB7XHJcbiAgICAgICAgYWRkPzogTnVtZXJpY0RpY3Rpb25hcnk8UGVybWlzc2lvbltdPiB8IERpY3Rpb25hcnk8UGVybWlzc2lvbltdPlxyXG4gICAgICAgIHJlbW92ZT86IE51bWVyaWNEaWN0aW9uYXJ5PFBlcm1pc3Npb25bXT4gfCBEaWN0aW9uYXJ5PFBlcm1pc3Npb25bXT5cclxuICAgIH07XHJcbiAgICB1c2Vycz86IHtcclxuICAgICAgICBhZGQ/OiBOdW1lcmljRGljdGlvbmFyeTxQZXJtaXNzaW9uW10+IHwgRGljdGlvbmFyeTxQZXJtaXNzaW9uW10+XHJcbiAgICAgICAgcmVtb3ZlPzogTnVtZXJpY0RpY3Rpb25hcnk8UGVybWlzc2lvbltdPiB8IERpY3Rpb25hcnk8UGVybWlzc2lvbltdPlxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBDb250cmlidXRvclxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250cmlidXRvciB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIGZpcnN0X25hbWU6IHN0cmluZztcclxuICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFByb2Nlc3NcclxuXHJcbmV4cG9ydCB0eXBlIFByb2Nlc3NQZXJtaXNzaW9ucyA9IFZpZXdQZXJtaXNzaW9uIHwgU2hhcmVQZXJtaXNzaW9uO1xyXG5cclxuZXhwb3J0IHR5cGUgUmF3UHJvY2Vzc1BlcnNpc3RlbmNlID0gJ1JBVyc7XHJcbmV4cG9ydCB0eXBlIENhY2hlZFByb2Nlc3NQZXJzaXN0ZW5jZSA9ICdDQUMnO1xyXG5leHBvcnQgdHlwZSBUZW1wUHJvY2Vzc1BlcnNpc3RlbmNlID0gJ1RNUCc7XHJcblxyXG5leHBvcnQgY29uc3QgUkFXX1BST0NFU1NfUEVSU0lTVEVOQ0U6IFJhd1Byb2Nlc3NQZXJzaXN0ZW5jZSA9ICdSQVcnO1xyXG5leHBvcnQgY29uc3QgQ0FDSEVEX1BST0NFU1NfUEVSU0lTVEVOQ0U6IENhY2hlZFByb2Nlc3NQZXJzaXN0ZW5jZSA9ICdDQUMnO1xyXG5leHBvcnQgY29uc3QgVEVNUF9QUk9DRVNTX1BFUlNJU1RFTkNFOiBUZW1wUHJvY2Vzc1BlcnNpc3RlbmNlID0gJ1RNUCc7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9jZXNzUGVyc2lzdGVuY2UgPSBSYXdQcm9jZXNzUGVyc2lzdGVuY2UgfCBDYWNoZWRQcm9jZXNzUGVyc2lzdGVuY2UgfCBUZW1wUHJvY2Vzc1BlcnNpc3RlbmNlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9jZXNzIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkOiBzdHJpbmc7XHJcbiAgICBtb2RpZmllZDogc3RyaW5nO1xyXG4gICAgdmVyc2lvbjogbnVtYmVyO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgY2F0ZWdvcnk6IHN0cmluZztcclxuICAgIHBlcnNpc3RlbmNlOiBQcm9jZXNzUGVyc2lzdGVuY2U7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW5wdXRfc2NoZW1hOiBhbnk7XHJcbiAgICBvdXRwdXRfc2NoZW1hOiBhbnk7XHJcbiAgICBydW46IGFueTtcclxuICAgIGNvbnRyaWJ1dG9yOiBDb250cmlidXRvcjtcclxuICAgIHBlcm1pc3Npb25zOiBJdGVtUGVybWlzc2lvbnNPZjxQcm9jZXNzUGVybWlzc2lvbnM+W107XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRGVzY3JpcHRvclNjaGVtYVxyXG5cclxuLy8gU2NoZW1hXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hvaWNlTWFwIHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkU2NoZW1hIHtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbiB8IHN0cmluZztcclxuICAgIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAgIGNvbGxhcHNlZD86IGJvb2xlYW47XHJcbiAgICBoaWRkZW4/OiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgZGVmYXVsdD86IGFueTtcclxuICAgIGNob2ljZXM/OiBDaG9pY2VNYXBbXTtcclxuICAgIGFsbG93X2N1c3RvbV9jaG9pY2U/OiBib29sZWFuO1xyXG4gICAgdmFsaWRhdGVfcmVnZXg/OiBzdHJpbmc7XHJcbiAgICBzbHVnPzoge1xyXG4gICAgICAgIHNvdXJjZT86IHN0cmluZztcclxuICAgICAgICB1bmlxdWVWYWxpZGF0b3I/OiAoc2x1Zzogc3RyaW5nKSA9PiBSeC5PYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgfTtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBncm91cD86IFNjaGVtYTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2NoZW1hID0gRmllbGRTY2hlbWFbXTtcclxuXHJcblxyXG4vLyBEZXNjcmlwdG9yU2NoZW1hXHJcbmV4cG9ydCB0eXBlIERlc2NyaXB0b3JTY2hlbWFQZXJtaXNzaW9ucyA9IFZpZXdQZXJtaXNzaW9uIHwgRWRpdFBlcm1pc3Npb24gfCBTaGFyZVBlcm1pc3Npb247XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JTY2hlbWFCYXNlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBjcmVhdGVkOiBzdHJpbmc7XHJcbiAgICBtb2RpZmllZDogc3RyaW5nO1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmVyc2lvbjogbnVtYmVyO1xyXG4gICAgc2NoZW1hOiBTY2hlbWE7XHJcbiAgICBjb250cmlidXRvcjogQ29udHJpYnV0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvclNjaGVtYSBleHRlbmRzIERlc2NyaXB0b3JTY2hlbWFCYXNlIHtcclxuICAgIHBlcm1pc3Npb25zOiBJdGVtUGVybWlzc2lvbnNPZjxEZXNjcmlwdG9yU2NoZW1hUGVybWlzc2lvbnM+W107XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2NhdHRlciBQbG90IEpzb25cclxuXHJcbi8vIFNjYXR0ZXJQbG90SnNvbi5Sb290T2JqZWN0IGlzIGEgdHlwZSBvZiBwcm9jZXNzIG91dHB1dC4gUHJvY2Vzc2VzIChpLmUuIFJvc2UyKVxyXG4vLyBzYXZlIGl0IHRvIGRhdGEub3V0cHV0LnNjYXR0ZXJfcGxvdC5cclxuZXhwb3J0IG5hbWVzcGFjZSBTY2F0dGVyUGxvdEpzb24ge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9vdE9iamVjdCB7IC8vIFRoaXMgaXMgdGhlIGFjdHVhbCB0eXBlIG9mIHRoZSBqc29uIG91dHB1dFxyXG4gICAgICAgIHBvaW50czogUG9pbnRzO1xyXG4gICAgICAgIG1ldGE/OiBNZXRhO1xyXG4gICAgICAgIGFubm90YXRpb25zPzogQW5ub3RhdGlvbltdO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUG9pbnRzIHtcclxuICAgICAgICB4X2F4aXM6IG51bWJlcltdO1xyXG4gICAgICAgIHlfYXhpczogbnVtYmVyW107XHJcbiAgICAgICAgaXRlbXM/OiBhbnlbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1ldGEge1xyXG4gICAgICAgIHhfbGFiZWw/OiBzdHJpbmc7XHJcbiAgICAgICAgeV9sYWJlbD86IHN0cmluZztcclxuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIGNocl9wb3M/OiBzdHJpbmdbXTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgdHlwZSBBbm5vdGF0aW9uID0gQW5ub3RhdGlvbkxpbmVHZW5lcmFsIHwgQW5ub3RhdGlvbkxpbmVWZXJ0aWNhbCB8IEFubm90YXRpb25MaW5lSG9yaXpvbnRhbDtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25MaW5lR2VuZXJhbCB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmUnO1xyXG4gICAgICAgIHgxOiBudW1iZXI7XHJcbiAgICAgICAgeDI6IG51bWJlcjtcclxuICAgICAgICB5MTogbnVtYmVyO1xyXG4gICAgICAgIHkyOiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25MaW5lVmVydGljYWwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lX3ZlcnRpY2FsJztcclxuICAgICAgICB4OiBudW1iZXI7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25MaW5lSG9yaXpvbnRhbCB7XHJcbiAgICAgICAgdHlwZTogJ2xpbmVfaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgeTogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRGF0YVxyXG5cclxuZXhwb3J0IHR5cGUgRGF0YVBlcm1pc3Npb25zID0gVmlld1Blcm1pc3Npb24gfCBFZGl0UGVybWlzc2lvbiB8IFNoYXJlUGVybWlzc2lvbiB8IERvd25sb2FkUGVybWlzc2lvbjtcclxuXHJcbmV4cG9ydCB0eXBlIFVwbG9hZGluZ0RhdGFTdGF0dXMgPSAnVVAnO1xyXG5leHBvcnQgdHlwZSBSZXNvbHZpbmdEYXRhU3RhdHVzID0gJ1JFJztcclxuZXhwb3J0IHR5cGUgV2FpdGluZ0RhdGFTdGF0dXMgPSAnV1QnO1xyXG5leHBvcnQgdHlwZSBQcm9jZXNzaW5nRGF0YVN0YXR1cyA9ICdQUic7XHJcbmV4cG9ydCB0eXBlIERvbmVEYXRhU3RhdHVzID0gJ09LJztcclxuZXhwb3J0IHR5cGUgRXJyb3JEYXRhU3RhdHVzID0gJ0VSJztcclxuZXhwb3J0IHR5cGUgRGlydHlEYXRhU3RhdHVzID0gJ0RSJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURJTkdfREFUQV9TVEFUVVM6IFVwbG9hZGluZ0RhdGFTdGF0dXMgPSAnVVAnO1xyXG5leHBvcnQgY29uc3QgUkVTT0xWSU5HX0RBVEFfU1RBVFVTOiBSZXNvbHZpbmdEYXRhU3RhdHVzID0gJ1JFJztcclxuZXhwb3J0IGNvbnN0IFdBSVRJTkdfREFUQV9TVEFUVVM6IFdhaXRpbmdEYXRhU3RhdHVzID0gJ1dUJztcclxuZXhwb3J0IGNvbnN0IFBST0NFU1NJTkdfREFUQV9TVEFUVVM6IFByb2Nlc3NpbmdEYXRhU3RhdHVzID0gJ1BSJztcclxuZXhwb3J0IGNvbnN0IERPTkVfREFUQV9TVEFUVVM6IERvbmVEYXRhU3RhdHVzID0gJ09LJztcclxuZXhwb3J0IGNvbnN0IEVSUk9SX0RBVEFfU1RBVFVTOiBFcnJvckRhdGFTdGF0dXMgPSAnRVInO1xyXG5leHBvcnQgY29uc3QgRElSVFlfREFUQV9TVEFUVVM6IERpcnR5RGF0YVN0YXR1cyA9ICdEUic7XHJcblxyXG5leHBvcnQgdHlwZSBEYXRhU3RhdHVzID0gVXBsb2FkaW5nRGF0YVN0YXR1cyB8IFJlc29sdmluZ0RhdGFTdGF0dXMgfCBXYWl0aW5nRGF0YVN0YXR1cyB8IFByb2Nlc3NpbmdEYXRhU3RhdHVzIHxcclxuICAgIERvbmVEYXRhU3RhdHVzIHwgRXJyb3JEYXRhU3RhdHVzIHwgRGlydHlEYXRhU3RhdHVzO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhQmFzZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY3JlYXRlZDogc3RyaW5nO1xyXG4gICAgbW9kaWZpZWQ6IHN0cmluZztcclxuICAgIHN0YXJ0ZWQ6IHN0cmluZztcclxuICAgIGZpbmlzaGVkOiBzdHJpbmc7XHJcbiAgICBjaGVja3N1bTogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBEYXRhU3RhdHVzO1xyXG4gICAgcHJvY2Vzc19wcm9ncmVzczogbnVtYmVyO1xyXG4gICAgcHJvY2Vzc19yYzogbnVtYmVyO1xyXG4gICAgcHJvY2Vzc19pbmZvOiBzdHJpbmdbXTtcclxuICAgIHByb2Nlc3Nfd2FybmluZzogc3RyaW5nW107XHJcbiAgICBwcm9jZXNzX2Vycm9yOiBzdHJpbmdbXTtcclxuICAgIHByb2Nlc3NfdHlwZTogc3RyaW5nO1xyXG4gICAgcHJvY2Vzc19pbnB1dF9zY2hlbWE6IGFueTtcclxuICAgIHByb2Nlc3Nfb3V0cHV0X3NjaGVtYTogYW55O1xyXG4gICAgcHJvY2Vzc19uYW1lOiBzdHJpbmc7XHJcbiAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpbnB1dDogYW55O1xyXG4gICAgb3V0cHV0OiBhbnk7XHJcbiAgICBkZXNjcmlwdG9yX3NjaGVtYTogRGVzY3JpcHRvclNjaGVtYUJhc2U7XHJcbiAgICBkZXNjcmlwdG9yOiBhbnk7XHJcbiAgICBjb250cmlidXRvcjogQ29udHJpYnV0b3I7XHJcbiAgICBwcm9jZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YSBleHRlbmRzIERhdGFCYXNlIHtcclxuICAgIHBlcm1pc3Npb25zOiBJdGVtUGVybWlzc2lvbnNPZjxEYXRhUGVybWlzc2lvbnM+W107XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBkYXRhOmRpZmZlcmVudGlhbGV4cHJlc3Npb246XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFEaWZmZXJlbnRpYWxFeHByZXNzaW9uIGV4dGVuZHMgRGF0YSB7XHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgICBkZV9maWxlOiB7IGZpbGU6IHN0cmluZywgc2l6ZTogbnVtYmVyIH07XHJcbiAgICAgICAgcmF3OiB7IGZpbGU6IHN0cmluZywgc2l6ZTogbnVtYmVyIH07XHJcbiAgICAgICAgZGVfanNvbjogbnVtYmVyO1xyXG4gICAgICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGRhdGE6Z2VuZXNldDpcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdlbmVzZXRPdXRwdXQge1xyXG4gICAgZ2VuZXNldDogeyBmaWxlOiBzdHJpbmcsIHNpemU6IG51bWJlciB9O1xyXG4gICAgZ2VuZXNldF9qc29uOiBudW1iZXI7IC8vID0+IERhdGFHZW5lc2V0U3RvcmFnZVxyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdlbmVzZXQgZXh0ZW5kcyBEYXRhIHtcclxuICAgIG91dHB1dDogRGF0YUdlbmVzZXRPdXRwdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdlbmVzZXRTdG9yYWdlIGV4dGVuZHMgU3RvcmFnZSB7XHJcbiAgICBqc29uOiB7XHJcbiAgICAgICAgZ2VuZXM6IHN0cmluZ1tdO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGRhdGE6Z2VuZXNldDp2ZW5uOlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhR2VuZXNldFZlbm5PdXRwdXQgZXh0ZW5kcyBEYXRhR2VuZXNldE91dHB1dCB7XHJcbiAgICB2ZW5uOiBudW1iZXI7IC8vID0+IERhdGFHZW5lc2V0VmVublN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhR2VuZXNldFZlbm4gZXh0ZW5kcyBEYXRhR2VuZXNldCB7XHJcbiAgICBvdXRwdXQ6IERhdGFHZW5lc2V0VmVubk91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhR2VuZXNldFZlbm5TdG9yYWdlIGV4dGVuZHMgU3RvcmFnZSB7XHJcbiAgICBqc29uOiB7XHJcbiAgICAgICAgcGFyZW50czogQXJyYXk8e1xyXG4gICAgICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGdlbmVzOiBzdHJpbmdbXTsgLy8gZ2VuZXNldF9qc29uIC4gZ2VuZXNcclxuICAgICAgICB9PjtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBkYXRhOmdvZWE6IEdlbmUgT250b2xvZ3lcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdPRW5yaWNobWVudEFuYWx5c2lzIGV4dGVuZHMgRGF0YSB7XHJcbiAgICBvdXRwdXQ6IHtcclxuICAgICAgICB0ZXJtczogbnVtYmVyOyAvLyA9PiBEYXRhR09FbnJpY2htZW50QW5hbHlzaXNTdG9yYWdlXHJcbiAgICAgICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHT0VucmljaG1lbnRBc3BlY3QgPSBHT0VucmljaG1lbnROb2RlW107XHJcbmV4cG9ydCBpbnRlcmZhY2UgR09FbnJpY2htZW50SnNvbiB7XHJcbiAgICB0b3RhbF9nZW5lczogbnVtYmVyO1xyXG4gICAgZ2VuZV9hc3NvY2lhdGlvbnM6IHtcclxuICAgICAgICBbZ29UZXJtSWQ6IHN0cmluZ106IHN0cmluZ1tdOyAvLyB0ZXJtX2lkID0+IGdlbmVfaWRzXHJcbiAgICB9O1xyXG4gICAgdHJlZToge1xyXG4gICAgICAgIFthc3BlY3RTbHVnOiBzdHJpbmddOiBHT0VucmljaG1lbnRBc3BlY3QsIC8vIFwiQlBcIiB8IFwiQ0NcIiB8IFwiTUZcIlxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHT0VucmljaG1lbnROb2RlIHtcclxuICAgIGdlbmVfaWRzOiBzdHJpbmdbXTtcclxuICAgIHRlcm1fbmFtZTogc3RyaW5nO1xyXG4gICAgdGVybV9pZDogc3RyaW5nO1xyXG4gICAgcHZhbDogbnVtYmVyO1xyXG4gICAgc2NvcmU6IG51bWJlcjtcclxuICAgIG1hdGNoZWQ6IG51bWJlcjsgLy8gTnVtYmVyIG9mIGZvdW5kIGVsZW1lbnRzIGluIGEgc2luZ2xlIG5vZGUuXHJcbiAgICB0b3RhbDogbnVtYmVyOyAvLyBUb3RhbCBudW1iZXIgb2YgZWxlbWVudHMgKGluY2x1ZGluZyBjaGlsZHJlbiBub2RlcykgaW4gYSBzaW5nbGUgbm9kZS5cclxuICAgIGNoaWxkcmVuPzogR09FbnJpY2htZW50Tm9kZVtdO1xyXG5cclxuICAgIC8vIEFkZGVkIGJ5IGZyb250ZW5kOlxyXG4gICAgZGVwdGg/OiBudW1iZXI7IC8vIE51bWVyaWNhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGV2ZWwgb2YgZGVwdGguIFVzZWQgZm9yIG9mZnNldHRpbmcgdGhlIHRlcm0gY29sdW1uLlxyXG4gICAgc291cmNlPzogc3RyaW5nO1xyXG4gICAgc2NvcmVfcGVyY2VudGFnZT86IG51bWJlcjsgLy8gUGVyY2VudGFnZSBvZiBtYXggc2NvcmUgd2l0aGluIEdPRW5yaWNobWVudEFzcGVjdC5cclxuICAgIGdlbmVfYXNzb2NpYXRpb25zPzogc3RyaW5nW107IC8vIFBsdWNrZWQgZnJvbSBHT0VucmljaG1lbnRKc29uLmdlbmVfYXNzb2NpYXRpb25zLlxyXG4gICAgY29sbGFwc2VkPzogYm9vbGVhbjsgLy8gQm9vbGVhbiByZXByZXNlbnRhdGlvbiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBoaWRkZW4uXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdPRW5yaWNobWVudEFuYWx5c2lzU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xyXG4gICAganNvbjogR09FbnJpY2htZW50SnNvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhR09FbnJpY2htZW50QW5hbHlzaXNJbnB1dCB7XHJcbiAgICBwdmFsX3RocmVzaG9sZDogbnVtYmVyO1xyXG4gICAgZ2VuZXM6IHN0cmluZ1tdO1xyXG4gICAgc291cmNlOiBzdHJpbmc7XHJcbiAgICBvbnRvbG9neTogbnVtYmVyO1xyXG4gICAgZ2FmOiBudW1iZXI7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBkYXRhOmdhZjogR0FGIGFubm90YXRpb25cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUdhZkFubm90YXRpb24gZXh0ZW5kcyBEYXRhIHtcclxuICAgIG91dHB1dDoge1xyXG4gICAgICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgIHNwZWNpZXM6IHN0cmluZztcclxuICAgICAgICBnYWY6IHsgZmlsZTogc3RyaW5nLCBzaXplOiBudW1iZXIgfTtcclxuICAgICAgICBnYWZfb2JqOiB7IGZpbGU6IHN0cmluZywgc2l6ZTogbnVtYmVyIH07XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ29sbGVjdGlvblxyXG5cclxuZXhwb3J0IHR5cGUgQ29sbGVjdGlvblBlcm1pc3Npb25zID0gVmlld1Blcm1pc3Npb24gfCBFZGl0UGVybWlzc2lvbiB8IFNoYXJlUGVybWlzc2lvbiB8XHJcbiAgICBEb3dubG9hZFBlcm1pc3Npb24gfCBBZGRQZXJtaXNzaW9uO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uQmFzZSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY3JlYXRlZDogc3RyaW5nO1xyXG4gICAgbW9kaWZpZWQ6IHN0cmluZztcclxuICAgIHNsdWc6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBzZXR0aW5nczogYW55O1xyXG4gICAgZGVzY3JpcHRvcl9zY2hlbWE6IERlc2NyaXB0b3JTY2hlbWFCYXNlO1xyXG4gICAgZGVzY3JpcHRvcjogYW55O1xyXG4gICAgY29udHJpYnV0b3I6IENvbnRyaWJ1dG9yO1xyXG4gICAgcGVybWlzc2lvbnM6IEl0ZW1QZXJtaXNzaW9uc09mPENvbGxlY3Rpb25QZXJtaXNzaW9ucz5bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsZWN0aW9uIGV4dGVuZHMgQ29sbGVjdGlvbkJhc2Uge1xyXG4gICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbkh5ZHJhdGVEYXRhIGV4dGVuZHMgQ29sbGVjdGlvbkJhc2Uge1xyXG4gICAgZGF0YTogRGF0YUJhc2VbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYW1wbGVCYXNlIGV4dGVuZHMgQ29sbGVjdGlvbkJhc2Uge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhbXBsZSBleHRlbmRzIENvbGxlY3Rpb24ge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhbXBsZUh5ZHJhdGVEYXRhIGV4dGVuZHMgQ29sbGVjdGlvbkh5ZHJhdGVEYXRhIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmVzYW1wbGUgZXh0ZW5kcyBDb2xsZWN0aW9uIHtcclxuICAgIHByZXNhbXBsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmVzYW1wbGVIeWRyYXRlRGF0YSBleHRlbmRzIENvbGxlY3Rpb25IeWRyYXRlRGF0YSB7XHJcbiAgICBwcmVzYW1wbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU3RvcmFnZVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBudW1iZXI7XHJcbiAgICBqc29uOiBhbnk7XHJcbiAgICBjb250cmlidXRvcjogQ29udHJpYnV0b3I7XHJcbiAgICBjcmVhdGVkOiBzdHJpbmc7XHJcbiAgICBtb2RpZmllZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhbXBsZUNsdXN0ZXJpbmcgeyAvLyBhcGktdHlwZWNoZWNrOnNhbXBsZV9jbHVzdGVyX2RhdGEuanNvbi5nelxyXG4gICAgc2FtcGxlX2lkczogXy5EaWN0aW9uYXJ5PHsgaWQ6IG51bWJlciB9PjtcclxuICAgIG9yZGVyOiBudW1iZXJbXTtcclxuICAgIGxpbmthZ2U6IG51bWJlcltdW107IC8vIFtbbm9kZTEsIG5vZGUyLCBkaXN0YW5jZSwgbnVtYmVyIG9mIHNhbXBsZXNdXVxyXG4gICAgemVyb19zYW1wbGVfaWRzOiBudW1iZXJbXTsgLy8gc2FtcGxlIGlkcyB3aXRoIG5vIGV4cHJlc3Npb25zXHJcbiAgICB6ZXJvX2dlbmVfc3ltYm9sczogc3RyaW5nW107IC8vIGdlbmUgc3ltYm9scyB3aXRoIG5vIGV4cHJlc3Npb25zXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VuZUNsdXN0ZXJpbmcgeyAvLyBhcGktdHlwZWNoZWNrOmdlbmVfY2x1c3Rlcl9kYXRhLmpzb24uZ3pcclxuICAgIGdlbmVfc3ltYm9sczogXy5EaWN0aW9uYXJ5PHsgZ2VuZTogc3RyaW5nIH0+O1xyXG4gICAgb3JkZXI6IG51bWJlcltdO1xyXG4gICAgbGlua2FnZTogbnVtYmVyW11bXTsgLy8gW1tub2RlMSwgbm9kZTIsIGRpc3RhbmNlLCBudW1iZXIgb2YgZ2VuZXNdXVxyXG4gICAgemVyb19zYW1wbGVfaWRzOiBudW1iZXJbXTsgLy8gc2FtcGxlIGlkcyB3aXRoIG5vIGV4cHJlc3Npb25zXHJcbiAgICB6ZXJvX2dlbmVfc3ltYm9sczogc3RyaW5nW107IC8vIGdlbmUgc3ltYm9scyB3aXRoIG5vIGV4cHJlc3Npb25zXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUENBIHtcclxuICAgIGV4cGxhaW5lZF92YXJpYW5jZV9yYXRpb3M6IG51bWJlcltdO1xyXG4gICAgYWxsX2V4cGxhaW5lZF92YXJpYW5jZV9yYXRpb3M6IG51bWJlcltdO1xyXG4gICAgYWxsX2NvbXBvbmVudHM6IChzdHJpbmd8bnVtYmVyKVtdW11bXTtcclxuICAgIGNvbXBvbmVudHM6IChzdHJpbmd8bnVtYmVyKVtdW11bXTtcclxuICAgIGZsb3Q6IHtcclxuICAgICAgICB4bGFiZWw6IHN0cmluZztcclxuICAgICAgICB5bGFiZWw6IHN0cmluZztcclxuICAgICAgICBkYXRhOiBudW1iZXJbXVtdO1xyXG4gICAgICAgIHNhbXBsZXM6IHN0cmluZ1tdO1xyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBVc2VyXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgZmlyc3RfbmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdF9uYW1lOiBzdHJpbmc7XHJcbiAgICBqb2JfdGl0bGU6IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIGRlcGFydG1lbnQ6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBsYWI6IHN0cmluZztcclxuICAgIHBob25lX251bWJlcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luUmVzcG9uc2Uge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9nb3V0UmVzcG9uc2Uge1xyXG59XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEZpbGVcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWQge1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG59XHJcbiJdfQ==
