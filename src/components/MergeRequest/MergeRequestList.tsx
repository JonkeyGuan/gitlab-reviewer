import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MergeRequestItem from 'components/MergeRequest/MergeRequestItem';
import React, { Component } from 'react';
import { MergeRequest } from 'types/FormattedTypes';

interface Props {
  mergeRequests: MergeRequest[];
}

class MergeRequestList extends Component<Props> {
  public static defaultProps: Props = {
    mergeRequests: []
  };

  public render() {
    const { mergeRequests } = this.props;

    const listItems = mergeRequests.map((mergeRequest: MergeRequest) => (
      <MergeRequestItem key={mergeRequest.id} mergeRequest={mergeRequest} />
    ));

    return (
      <div className="pl-3">
        <table className="w-full">
          <thead className="text-2xl">
            <tr>
              <th>Title</th>
              <th className="w-32 text-center">Author</th>
              <th className="w-32 text-center">
                <FontAwesomeIcon icon={faThumbsUp} size="sm" className="text-green-600" />
              </th>
              <th className="w-32 text-center">
                <FontAwesomeIcon icon={faThumbsDown} size="sm" className="text-red-600" />
              </th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}

export default MergeRequestList;
