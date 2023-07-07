export function utilGetSidebarStatus() {
  const status = JSON.parse(localStorage.getItem("sidebarStatus") || "true");
  return status;
}

export function utilSaveSidebarStatus(status: boolean) {
  localStorage.setItem("sidebarStatus", JSON.stringify(status));
}
