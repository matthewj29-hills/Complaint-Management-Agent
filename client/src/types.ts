export interface Complaint {
  id: number;
  name: string;
  email: string;
  complaint: string;
  status: 'Pending' | 'Resolved';
  created_at: string;
}

export interface ComplaintFormData {
  name: string;
  email: string;
  complaint: string;
} 