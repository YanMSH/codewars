export class PaginationHelper {
  collection: any[];
  itemsPerPage: number;

  constructor(collection: any[], itemsPerPage: number) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount(): number {
    return this.collection.length;
  }

  pageCount(): number {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex: number): number {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }
    if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  pageIndex(itemIndex: number): number {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
