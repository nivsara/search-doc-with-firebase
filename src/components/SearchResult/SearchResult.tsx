import './SearchResult.scss';
import { FcReading } from "react-icons/fc";
import { HiDocumentAdd } from "react-icons/hi";
import { GiCloudDownload } from "react-icons/gi";
import screenShot from '../../assets/images/doc-ss.png';

function SearchResult() {
    return (
        <div className='search-result-wrapper'>
            <div className='search-result-content'>
                <div className='doc-list-wrapper'>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='doc-image-wrapper'>
                            <img className='doc-image' src={screenShot} alt=""/>
                            <div className='doc-icon-group'>
                                <div className='icon-placeholder add-icon'>
                                    <HiDocumentAdd />
                                </div>
                                <div className='icon-placeholder download-icon'>
                                    <GiCloudDownload />
                                </div>
                            </div>
                        </div>
                        <div className='doc-info-wrapper'>
                            <p className='doc-title'>Vishnu G Naik Cover Letter</p>
                        </div>
                    </div>
                </div>
                <div className='empty-state-content-wrapper'>
                    <div className='empty-state-img'>
                        <FcReading />
                    </div>
                    <div className='empty-state-content'>
                        <p className='empty-state-text'>Uh Oh!</p>
                        <p className='empty-state-text'>We couldn't find that keyword anywhere in your docs!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;