export type Report = {
  id: number;
  name: string;
  description: string;
  plateNumber: string;
  latitude: number;
  longitude: number;
  status: number;
  cancelledAt: string;
  createdAt: string;
  updatedAt: string;
};

export type ReportStatus = {
  remarks: string;
  createdAt: string;

  id: number;
  status: number;
};
