
import uuidv4 from 'uuid/v4';

class DepressionChecklist {
    constructor(date, data) {
        this.id = uuidv4();
        this.date = date;
        this.depressionChecklistData = data;
    }

    get depressionChecklist() {
        return {
            id: this.id,
            date: this.date,
            depressionChecklistData: this.depressionChecklistData
        }
    }
};

export default DepressionChecklist;