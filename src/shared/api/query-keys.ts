export const queryKeys = {
  // Add feature domains here
  contact: {
    all: ["contact"] as const,
    list: () => [...queryKeys.contact.all, "list"] as const,
    detail: (id: string) => [...queryKeys.contact.all, "detail", id] as const,
  },
  projects: {
    all: ["projects"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.projects.all, "list", { filters }] as const,
  },
};
