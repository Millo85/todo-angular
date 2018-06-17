export interface Task {
    
    //con il ? significa che è opzionale altrimenti è Required
    
    title: string;
    description?: string;
    deadline?: string;
    priority?: number;
    completed: boolean; 
}