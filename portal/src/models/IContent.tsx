export interface IContent {
    contents: Content[];
}

export interface Content {
    durum:    boolean;
    mesaj:    string;
    bilgiler: Bilgiler[];
}

export interface Bilgiler {
    contentId: string;
    title:     string;
    summary:   string;
    details:   string;
    date:      Date;
    status:    string;
}
