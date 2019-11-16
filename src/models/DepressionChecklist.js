
import uuidv4 from 'uuid/v4';

class DepressionChecklist {
    constructor(id = null, date, data) {
        this.id = id === null ? uuidv4() : id;
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